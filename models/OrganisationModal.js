const mongoose = require("mongoose");

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
    required: true,
  },
  organisationDescription: {
    type: String,
    required: true,
  },
  Members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
