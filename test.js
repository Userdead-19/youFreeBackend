// const axios = require("axios");

// const calendarCall = () => {
//   const body = {
//     start: "2024-02-16T23:00:00",
//     end: "2024-02-16T23:30:00",
//     timezone: "IST",
//     calendar_ids: [
//       "0502d358287d3cd87aa175ac2c24013202503acd7243c347c38d924944b92635@group.calendar.google.com",
//     ],
//   };

//   axios
//     .get("http://127.0.0.1:5000/specific-date", { params: body })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// calendarCall();

const start = new Date(); // Replace this with your actual datetime object
const startStr = start.toISOString();

console.log(startStr);
