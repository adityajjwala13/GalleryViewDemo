const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const port = 6000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/image", require("./routes/image"));

app.listen(port, () => {
  console.log(`Backend started listening on port ${port}`);
});

