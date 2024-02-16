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
    });
    const savedMeeting = await meeting.save();
    res.send(savedMeeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetMeeting = async (req, res) => {
  try {
    const { meetingName } = req.params;
    const meeting = await meetingSchema.find({ meetingName: meetingName });
    res.send(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetAllUserMeetings = async (req, res) => {
  try {
    const { MeetingCreator } = req.params;
    const meetings = await meetingSchema.find({
      MeetingCreator: MeetingCreator,
    });
    res.send(meetings);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { CreateMeeting, GetMeeting, GetAllUserMeetings };
