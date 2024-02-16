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
  Members: [],
});

module.exports = mongoose.model("Organisation", organisationSchema);
