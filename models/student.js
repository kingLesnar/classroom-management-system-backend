const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      maxLength: 32,
      trim: true,
    },
    profile: {
      type: String,
      default: "",
    },

    adharPhoto: {
      type: String,
      default: "",
    },
    adharCardNumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      // required: true,
      unique: true,
    },
    phone: {
      type: String,
      // required: true,
      maxlength: 10,
    },
    role: {
      type: Number,
      default: 1,
    },
    addresses: {
      type: Array,
      default: [],
    },
    RegNo: {
      type: String,
    },
  },
  { timestamps: true },
);

// role delivery = 0 , user = 1 , admin= 2

// userSchema
//   .virtual("password")
//   .set(function (password) {
//     this._password = password;
//     console.log(this._password);
//     this.salt = uuidv4();
//     this.encry_password = this.securePassword(password);
//   })
//   .get(function () {
//     console.log("this._password", this._password);
//     return this._password;
//   });

// userSchema.methods = {
//   authenticate: function (plainpassword) {
//     console.log("plain password", plainpassword);
//     // console.log("secure password", this.securePassword(plainpassword));
//     console.log("this.encry_password", this.encry_password);
//     let auth = bcrypt.compare(plainpassword, this.encry_password);
//     return auth;
//     // return this.securePassword(plainpassword) === this.encry_password;
//   },
//   securePassword: async function (plainpassword) {
//     if (!plainpassword) return "";
//     try {
//       const salt = await bcrypt.genSalt();
//       const hashedPassword = await bcrypt.hash(req.body.password, salt);
//       return hashedPassword;
//     } catch (error) {
//       return "";
//     }
//   },
// };
module.exports = mongoose.model("User", userSchema);

// we cant push addresses in user address list befre creating
