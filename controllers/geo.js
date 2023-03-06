const Classroom = require("../models/geo");

exports.getUserById = (req, res, next, id) => {
  // console.log(id)
  Classroom.findById(id).exec((err, Classroom) => {
    if (err || !Classroom) {
      return res.status(400).json({
        error: "No Classroom found in the database",
      });
    }
    req.Classroom = Classroom;
    next();
  });
};
exports.createClassroom = (req, res) => {
  const Classroom = new Classroom(req.body);
  Classroom.save((err, Classroom) => {
    if (err) {
      return res.status(400).json({
        error: " NOT able to save Classroom in DB",
      });
    }
    res.json({ Classroom });
  });
};
exports.getClassroom = (req, res) => {
  console.log("eee");
  return res.json(req.Classroom);
};

exports.getAllClassroom = (req, res) => {
  Classroom.find().exec((err, Classroom) => {
    if (err) {
      return res.status(400).json({
        error: "NO Classroom found",
      });
    }
    res.json(Classroom);
  });
};

exports.updateClassroom = (req, res) => {
  // console.log(req.Classroom)
  const Classroom = req.Classroom;
  Classroom.name = req.body.name;

  Classroom.save((err, updatedClassroom) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to update the Classroom",
      });
    }
    res.json(updatedClassroom);
  });
};

exports.removeClassroom = (req, res) => {
  const Classroom = req.Classroom;

  Classroom.remove((err, Classroom) => {
    if (err) {
      return res.status(400).json({
        error: " Unable to remove Classroom",
      });
    }
    res.json({
      message: `Removed Successully`,
    });
  });
};
