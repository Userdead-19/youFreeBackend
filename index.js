const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the backend server of youFree? Application");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
