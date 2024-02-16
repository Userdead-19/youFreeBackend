const mongoose = require("mongoose");

const meetingTimeResponseSchema = new mongoose.Schema(
  {
    meeting: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meeting",
    },
    user: {
      type: String,
      ref: "User",
    },
    meetingTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "MeetingTimeResponse",
  meetingTimeResponseSchema
);
