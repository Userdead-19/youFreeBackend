const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const userRouter = require("./routes/UserRoutes");
const meetingRouter = require("./routes/MeetingsRouter");
const meetingTimeRouter = require("./routes/MeetingTimeRoutes");
const organisationRouter = require("./routes/OrganisationRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://admin:alo4567@cluster0.7qx0l5f.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("this is the backend server of youFree? Application");
});

app.use("/user", userRouter);
app.use("/meeting", meetingRouter);
app.use("/meetingTime", meetingTimeRouter);
app.use("/organisation", organisationRouter);

app.get("/roundrobin,(req,res)=>{
        res.send('''#include<stdio.h>
#include<stdlib.h>

struct PCB {
    int cpuBurst;
    int procId;
    int waitingTime;
    struct PCB *prev, *next;
};

struct PCB *createPCB(int procId, int cpuBurst) {
    struct PCB *newPCB = (struct PCB *)malloc(sizeof(struct PCB));
    newPCB->procId = procId;
    newPCB->cpuBurst = cpuBurst;
    newPCB->waitingTime = 0;
    newPCB->prev = NULL;
    newPCB->next = NULL;
    return newPCB;
}

void insert_rr(struct PCB **head, struct PCB *newPCB) {
    if (*head == NULL) {
        *head = newPCB;
    } else {
        struct PCB *temp = *head;
        while (temp->next != *head && temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newPCB;
        newPCB->prev = temp;
        newPCB->next = *head;
        (*head)->prev = newPCB;
    }
}

void round_robin(struct PCB **head, int timeQuantum, int n) {
    struct PCB *current = *head;
    int current_time = 0;
    int times_executed[n];
    int total_waiting_time = 0;
    int tat = 0;

    for (int i = 0; i < n; i++) {
        times_executed[i] = 0;
    }

    while (current != NULL) {
        int allProcessesCompleted = 1;

        struct PCB *temp = *head;

        while (temp != NULL) {
            if (temp->cpuBurst > 0) {
                allProcessesCompleted = 0;
                break;
            }
            temp = temp->next;
            if (temp == *head) break;
        }

        if (allProcessesCompleted) {
            break;
        }

        if (current->cpuBurst > timeQuantum) {
            current->cpuBurst -= timeQuantum;
            current_time += timeQuantum;
            times_executed[current->procId - 1]++;
            printf("Process:%d is running\n", current->procId);
            current = current->next;
        } else if (current->cpuBurst <= timeQuantum) {
            current->waitingTime = current_time - (timeQuantum * times_executed[current->procId - 1]);
            current_time += current->cpuBurst;
            total_waiting_time += current->waitingTime;
            tat += current->waitingTime + current->cpuBurst + timeQuantum * times_executed[current->procId - 1];
            printf("Process:%d exited with a waiting time of %d milliseconds\n", current->procId, current->waitingTime);

            if (current->next == current) {
                free(current);
                current = NULL;
            } else {
                current->prev->next = current->next;
                current->next->prev = current->prev;
                struct PCB *temp = current;
                current = current->next;
                free(temp);
            }
        }
    }

    float avg_waiting_time = (float)total_waiting_time / n;
    printf("Avg waiting time is %.2f milliseconds\n", avg_waiting_time);
    float avg_turnaround_time = (float)tat / n;
    printf("Avg turnaround time is %.2f milliseconds\n", avg_turnaround_time);
}

void display(struct PCB *head) {
    struct PCB *current = head, *temp = NULL;
    while (current != NULL) {
        printf("Process:%d is running for %d millisecond with a waiting time of %d milliseconds\n", current->procId, current->cpuBurst, current->waitingTime);
        current = current->next;
        if (temp != NULL) temp = temp->next;
        if (temp == head) break;
        if (current == head) {
            temp = current;
        }
    }
}

int main() {
    struct PCB *head_rr = NULL;
    int n, q;

    printf("Enter the no of processes:");
    scanf("%d", &n);

    printf("Enter the details of processes\n");
    for (int i = 0; i < n; i++) {
        int cpuBurst;
        printf("Enter the cpu burst time for process %d :", i + 1);
        scanf("%d", &cpuBurst);
        struct PCB *newPCB_rr = createPCB(i + 1, cpuBurst);
        insert_rr(&head_rr, newPCB_rr);
    }

    printf("Enter the time quantum for round robin:");
    scanf("%d", &q);
    round_robin(&head_rr, q, n);
    return 0;
}
''')


})

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
