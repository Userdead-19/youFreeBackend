const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
  {
    meetingName: {
      type: String,
      required: true,
    },
    MeetingDescription: {
      type: String,
      required: true,
    },
    MeetingStartTime: {
      type: String,
      required: true,
    },
    MeetingEndTime: {
      type: String,
      required: true,
    },
    MeetingTimeZone: {
      type: String,
      required: true,
    },
    MeetingLink: {
      type: String,
      required: true,
    },
    MeetingMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    MeetingTimeResponses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MeetingTimeResponse",
      },
    ],
    MeetingCreator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    MeetingStatus: {
      type: String,
      required: true,
      default: "Yet to Start",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Meeting", meetingSchema);
