const MeetingTimeResponse = require("../models/MeetingTimeResponseModal");

const CreateMeetingTimeResponse = async (req, res) => {
  try {
    const meetingTimeResponse = new MeetingTimeResponse({
      meeting: req.body.meeting,
      user: req.body.user,
      meetingTime: req.body.meetingTime,
    });
    const savedMeetingTimeResponse = await meetingTimeResponse.save();
    res.json(savedMeetingTimeResponse);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetMeetingTimeResponse = async (req, res) => {
  try {
    const { user } = req.params;
    const meetingTimeResponse = await MeetingTimeResponse.find({
      user: user,
    });
    res.json(meetingTimeResponse);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { CreateMeetingTimeResponse, GetMeetingTimeResponse };
