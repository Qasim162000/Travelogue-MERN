const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "travellog";

const connectToMongo = () => {
  mongoose.connect(`mongodb://${server}/${database}`),
    () => {
      console.log("Connected to MongoDB successfully");
    };
};

module.exports = connectToMongo;
