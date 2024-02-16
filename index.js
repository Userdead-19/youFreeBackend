const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const userRouter = require("./routes/UserRoutes");
const meetingRouter = require("./routes/MeetingsRouter");
const meetingTimeRouter = require("./routes/MeetingTimeRoutes");
const organisationRouter = require("./routes/OrganisationRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
