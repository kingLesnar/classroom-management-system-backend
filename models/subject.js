const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcrypt");

var SubjectSchema = new mongoose.Schema(
  {
    subjectCode: {
      type: String,
    },
    subjectName: {
      type: String,
    },
    numOfClasses: {
      type: Number,
    },
    teacherName: {
      type: String,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Subject", SubjectSchema);
