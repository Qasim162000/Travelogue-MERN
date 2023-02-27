const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Travellog = require("../models/Travellog");
const { body, validationResult } = require("express-validator");
const router = express.Router();

//Route 1: Fetching all logs on a User's profile using GET: /api/travellog/fetchlog. Login required
router.get("/fetchlog", fetchuser, async (req, res) => {
  try {
    const log = await Travellog.find({ user: req.user.id });
    res.json(log);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error!" });
  }
});

//Route 2: Add a log on a User's profile using POST: /api/travellog/addlog. Login required
router.post(
  "/addlog",
  fetchuser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("departure_from", "Enter a valid Place").isLength({ min: 2 }),
    body("destination", "Enter a valid place").isLength({ min: 2 }),
    body(
      "description",
      "Enter a minimum of 5 words describing your exprience"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, departure_from, destination, description } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const log = new Travellog({
        title,
        departure_from,
        destination,
        description,
        user: req.user.id,
      });
      const savedLog = await log.save();

      res.json(savedLog);
    } catch (error) {
      res.status(500).send({ error: "Internal Server Error!" });
    }
  }
);

//Route 3: Update a log on User's profile using PUT: /api/travellog/updatelog. Login required
router.put("/updatelog/:id", fetchuser, async (req, res) => {
  const { title, departure_from, destination, description } = req.body;
  try {
    const newLog = {};
    if (title) {
      newLog.title = title;
    }
    if (departure_from) {
      newLog.departure_from = departure_from;
    }
    if (destination) {
      newLog.destination = destination;
    }
    if (description) {
      newLog.description = description;
    }
    let log = await Travellog.findById(req.params.id);
    if (!log) {
      res.status(404).send("Not Found");
    }
    if (log.user.toString() !== req.user.id) {
      res.status(404).send("Not Allowed");
    }
    log = await Travellog.findByIdAndUpdate(
      req.params.id,
      { $set: newLog },
      { new: true }
    );
    res.json({ log });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error!" });
  }
});

//Route 4: Delete an existing log using DELETE: /api/travellog/deletelog. Login required
router.delete("/deletelog/:id", fetchuser, async (req, res) => {
  try {
    let log = await Travellog.findById(req.params.id);
    if (!log) {
      res.status(404).send("Not Found");
    }

    if (log.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    log = await Travellog.findByIdAndDelete(req.params.id);
    res.json({ Success: "Travel Log has been deleted", log: log });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error!" });
  }
});

module.exports = router;
