const axios = require("axios");

const calendarCall = () => {
  const body = {
    start: "2024-02-16T23:00:00",
    end: "2024-020-16T23:30:00",
    timezone: "IST",
    calender_ids: [
      "0502d358287d3cd87aa175ac2c24013202503acd7243c347c38d924944b92635@group.calendar.google.com",
    ],
  };
  axios
    .post("https://youfreeBackend.onrender.com/specific-time", body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

calendarCall();
