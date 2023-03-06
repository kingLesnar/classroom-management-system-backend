const Student = require("../models/student");

exports.getStudentById = (req, res, next, id) => {
  // console.log(id)
  Student.findById(id).exec((err, Student) => {
    if (err || !Student) {
      return res.status(400).json({
        error: "No Student found in the database",
      });
    }
    req.Student = Student;
    next();
  });
};
exports.createStudent = (req, res) => {
  const student = new Student(req.body);
  student.save((err, student) => {
    if (err) {
      return res.status(400).json({
        error: " NOT able to save Student in DB",
      });
    }
    res.json({ student });
  });
};
exports.getStudent = (req, res) => {
  console.log("eee");
  return res.json(req.student);
};

exports.getAllStudent = (req, res) => {
  Student.find().exec((err, students) => {
    if (err) {
      return res.status(400).json({
        error: "NO Students found",
      });
    }
    res.json(students);
  });
};

exports.updateStudent = (req, res) => {
  // console.log(req.Student)
  const student = req.student;
  student.name = req.body.name;

  student.save((err, updatedStudent) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to update the Student",
      });
    }
    res.json(updatedStudent);
  });
};

exports.removeStudent = (req, res) => {
  const student = req.student;

  student.remove((err, student) => {
    if (err) {
      return res.status(400).json({
        error: " Unable to remove Student",
      });
    }
    res.json({
      message: `Removed Successully`,
    });
  });
};
