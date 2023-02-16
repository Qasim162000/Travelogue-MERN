const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create a User using POST: "/api/auth". Doesn't require Auth
router.get("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

module.exports = router;
