const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    role: {
      type: String,
      required: true,
    },
    pendingRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meeting",
      },
    ], // array of datesPending
    MeetingAlloted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meeting",
      },
    ],
    SheduleCreated: [
      { type: mongoose.Schema.Types.ObjectId, ref: "MeetingTimeResponse" },
    ],
    Oraganisations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organisation",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
