const Router = require("express").Router();

const {
  CreateMeetingTimeResponse,
  GetMeetingTimeResponse,
} = require("../Controllers/MeetingTimeResponseFunction");

Router.post("/createMeetingTimeResponse", CreateMeetingTimeResponse);

Router.get("/getMeetingTimeResponse/:user", GetMeetingTimeResponse);

module.exports = Router;
