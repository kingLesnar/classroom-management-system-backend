const Student = require("../models/student");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  // fields
  // name, profile, adharPhoto, adharCardNumber, email, phone, role, addresses, RegNo
  const student = new Student(req.body);
  student.save((err, student) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save student In DB",
      });
    }
    res.json({
      name: student.name,
      password: student.encry_password,
      id: student._id,
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { RegNo, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Student.findOne({ RegNo }, (err, student) => {
    if (err || !student) {
      return res.status(400).json({
        error: "Student doesn't exist",
      });
    }
    if (!student.authenticate(password)) {
      res.status(401).json({
        error: "Register Number or password is incorrect",
      });
    }
    const token = jwt.sign({ _id: student._id }, process.env.SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });
    const { _id, RegNo, role } = student;
    return res.json({ token, user: { _id, RegNo, role } });
  });
};
