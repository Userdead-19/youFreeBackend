const meetingSchema = require("../models/MeetingModal");
const userSchema = require("../models/UserModal");
const CreateMeeting = async (req, res) => {
  try {
    console.log(req.body);
    const meeting = new meetingSchema({
      meetingName: req.body.meetingName,
      MeetingDescription: req.body.MeetingDescription,
      MeetingStartTime: req.body.MeetingStartTime,
      MeetingEndTime: req.body.MeetingEndTime,
      MeetingMembers: req.body.MeetingMembers,
      MeetingCreator: req.body.MeetingCreator,
      MeetingTimeZone: req.body.MeetingTimeZone,
      MeetingLink: req.body.MeetingLink,
      OraganisationName: req.body.OraganisationName,
    });
    for (let i = 0; i < req.body.MeetingMembers.length; i++) {
      await userSchema.findOneAndUpdate(
        { _id: req.body.MeetingMembers[i] },
        { $push: { pendingRequests: meeting._id, MeetingAlloted: meeting._id } }
      );
    }
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
    const meetingmain = await meetingSchema.findOne({
      meetingName: meetingName,
    });
    const meeting = await meetingSchema.findOneAndDelete({
      meetingName: meetingName,
    });
    for (let i = 0; i < meeting.MeetingMembers.length; i++) {
      await userSchema.findOneAndUpdate(
        { _id: meeting.MeetingMembers[i] },
        {
          $pull: {
            MeetingAlloted: meetingmain._id,
            pendingRequests: meetingmain._id,
          },
        }
      );
    }
    res.json(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserMeeting = async (req, res) => {
  try {
    const { userid } = req.params;
    const userMeetings = await meetingSchema.find({ MeetingMembers: userid });
    res.json(userMeetings);
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
  getUserMeeting,
};
