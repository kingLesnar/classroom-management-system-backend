const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

app.use("/ping", (req, res) => res.end("message working"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
