const mongoose = require("mongoose");

const meetingTimeResponseSchema = new mongoose.Schema({
  meeting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meeting",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model(
  "MeetingTimeResponse",
  meetingTimeResponseSchema
);
