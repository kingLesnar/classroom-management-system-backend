const Teacher = require("../models/geo");

exports.getTeacherById = (req, res, next, id) => {
  // console.log(id)
  Teacher.findById(id).exec((err, Teacher) => {
    if (err || !Teacher) {
      return res.status(400).json({
        error: "No Teacher found in the database",
      });
    }
    req.Teacher = Teacher;
    next();
  });
};
exports.createTeacher = (req, res) => {
  const Teacher = new Teacher(req.body);
  Teacher.save((err, Teacher) => {
    if (err) {
      return res.status(400).json({
        error: " NOT able to save Teacher in DB",
      });
    }
    res.json({ Teacher });
  });
};
exports.getTeacher = (req, res) => {
  console.log("eee");
  return res.json(req.Teacher);
};

exports.getAllTeacher = (req, res) => {
  Teacher.find().exec((err, Teacher) => {
    if (err) {
      return res.status(400).json({
        error: "NO Teacher found",
      });
    }
    res.json(Teacher);
  });
};

exports.updateTeacher = (req, res) => {
  // console.log(req.Teacher)
  const Teacher = req.Teacher;
  Teacher.name = req.body.name;

  Teacher.save((err, updatedTeacher) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to update the Teacher",
      });
    }
    res.json(updatedTeacher);
  });
};

exports.removeTeacher = (req, res) => {
  const Teacher = req.Teacher;

  Teacher.remove((err, Teacher) => {
    if (err) {
      return res.status(400).json({
        error: " Unable to remove Teacher",
      });
    }
    res.json({
      message: `Removed Successully`,
    });
  });
};
