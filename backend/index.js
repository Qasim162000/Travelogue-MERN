const express = require("express");
const connectToMongo = require("./db");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors())

app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/travellog", require("./routes/travellog"));

app.listen(port, () => {
  console.log(`Travelogue backend listening on port http://localhost:${port}`);
});
