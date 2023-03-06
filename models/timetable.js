const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcrypt");

var TimeTableSchema = new mongoose.Schema(
  {
    fullTime: {
      type: String,
      required: true,
      defaultValue: "00:00",
    },

    subjectCode: {
      type: String,
    },
    Date: {
      type: Date,
    },
    period: {
      type: String,
    },
    serialNum: {
      type: Number,
    },
    subjectName: {
      type: String,
    },
    hallId: {
      type: Number,
    },
  },
  { timestamps: true },
);

//  period,
//  serialnum: int,
// subjectCode populate from subject schema
// subject name: populate from subject schema
// hallId:  populate from classRoom
module.exports = mongoose.model("TimeTable", TimeTableSchema);
