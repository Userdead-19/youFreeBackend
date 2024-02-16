const userSchema = require("../models/UserModal");

const CreateUser = async (req, res) => {
  try {
    const user = new userSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await userSchema.find({ username: username });
    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const users = await userSchema.find();
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { CreateUser, GetUser, GetAllUsers };
