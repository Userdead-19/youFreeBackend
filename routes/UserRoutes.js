const express = require("express");
const router = express.Router();

const {
  CreateUser,
  GetUser,
  GetAllUsers,
} = require("../Controllers/UserFunctions");

router.post("/createUser", CreateUser);
router.get("/getUser/:username", GetUser);
router.get("/getAllUsers", GetAllUsers);

module.exports = router;
