const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const url = "mongodb+srv://Admin:GeoLogs@cms-db.bvbbfp4.mongodb.net/geologs";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.error(err);
    console.log("DATABASE GOT CRASHED");
  });

// MY Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// Routes
const authRoutes = require("./routes/auth");

// MyRoutes
app.use("/ping", (req, res) => res.end("message working"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
