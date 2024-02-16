const Router = require("express").Router();

const {
  CreateMeeting,
  GetMeeting,
  GetAllMeetings,
  UpdateMeeting,
  DeleteMeeting,
} = require("../Controllers/MeetingFunctions");

Router.post("/createMeeting", CreateMeeting);

Router.get("/getMeeting/:meetingName", GetMeeting);

Router.get("/getMeetings", GetAllMeetings);

Router.put("/updateMeeting/:meetingName", UpdateMeeting);

Router.delete("/deleteMeeting/:meetingName", DeleteMeeting);

module.exports = Router;
// Path: routes/UserRoutes.js
