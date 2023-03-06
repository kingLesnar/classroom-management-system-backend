const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcrypt");

var ClassRoomSchema = new mongoose.Schema(
  {
    hallId: {
      type: Number,
    },
    lat: {
      type: String,
    },
    long: {
      type: String,
    },
    blockNum: {
      type: String,
    },
  },
  { timestamps: true },
);
// subject name,
// total num of classes
// teacher name populate from teacher schema
module.exports = mongoose.model("ClassRoom", ClassRoomSchema);
