const meetingSchema = require("../models/MeetingModal");

const CreateMeeting = async (req, res) => {
  try {
    const meeting = new meetingSchema({
      meetingName: req.body.meetingName,
      MeetingDescription: req.body.MeetingDescription,
      MeetingStartTime: req.body.MeetingStartTime,
      MeetingEndTime: req.body.MeetingEndTime,
      MeetingMembers: req.body.MeetingMembers,
      MeetingCreator: req.body.MeetingCreator,
      MeetingStatus: req.body.MeetingStatus,
      MeetingTimeZone: req.body.MeetingTimeZone,
      MeetingLink: req.body.MeetingLink,
    });
    const savedMeeting = await meeting.save();
    res.json(savedMeeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetMeeting = async (req, res) => {
  try {
    const { meetingName } = req.params;
    const meeting = await meetingSchema.find({ meetingName: meetingName });
    res.json(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetAllMeetings = async (req, res) => {
  try {
    const meetings = await meetingSchema.find();
    res.json(meetings);
  } catch (error) {
    res.status(400).send(error);
  }
};

const UpdateMeeting = async (req, res) => {
  try {
    const { meetingName } = req.params;
    const meeting = await meetingSchema.findOneAndUpdate({
      meetingName: meetingName,
    });
    res.json(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

const DeleteMeeting = async (req, res) => {
  try {
    const { meetingName } = req.params;
    const meeting = await meetingSchema.findOneAndDelete({
      meetingName: meetingName,
    });
    res.json(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  CreateMeeting,
  GetMeeting,
  GetAllMeetings,
  UpdateMeeting,
  DeleteMeeting,
};
