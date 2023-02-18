const mongoose = require("mongoose");

const TravelLogSchema = new mongoose.Schema({
  departure_from: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    default: Date.now,
  },
});

const Travellog = mongoose.model("travellog", TravelLogSchema);
module.exports = Travellog;
