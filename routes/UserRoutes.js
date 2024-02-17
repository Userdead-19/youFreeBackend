const express = require("express");
const router = express.Router();

const {
  CreateUser,
  GetUser,
  GetAllUsers,
  LoginUser,
} = require("../Controllers/UserFunctions");

router.post("/createUser", CreateUser);
router.get("/getUser/:username", GetUser);
router.get("/getAllUsers", GetAllUsers);
router.post("/login", LoginUser);

module.exports = router;
