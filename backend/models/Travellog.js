const mongoose = require("mongoose");

const TravelLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  departure_from: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  descripton: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Travellog = mongoose.model("travellog", TravelLogSchema);
module.exports = Travellog;
