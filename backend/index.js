const express = require("express");
const connectToMongo = require("./db");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/travel-log", require("./routes/travellog"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
