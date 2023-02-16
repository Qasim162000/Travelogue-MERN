const mongoose = require("mongoose");
const { Schema } = mongoose;

const TravelLogSchema = new Schema({
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

module.exports = mongoose.model("travellog", TravelLogSchema);
