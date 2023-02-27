const mongoose = require("mongoose");

const TravelLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  departure_from: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Travellog = mongoose.model("travellog", TravelLogSchema);
module.exports = Travellog;
