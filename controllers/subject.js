const Subject = require("../models/subject");

exports.getSubjectById = (req, res, next, id) => {
  // console.log(id)
  Subject.findById(id).exec((err, subject) => {
    if (err || !subject) {
      return res.status(400).json({
        error: "No subject found in the database",
      });
    }
    req.subject = subject;
    next();
  });
};
exports.createSubject = (req, res) => {
  const subject = new Subject(req.body);
  subject.save((err, subject) => {
    if (err) {
      return res.status(400).json({
        error: " NOT able to save subject in DB",
      });
    }
    res.json({ subject });
  });
};
exports.getSubject = (req, res) => {
  console.log("eee");
  return res.json(req.subject);
};

exports.getAllSubject = (req, res) => {
  Subject.find().exec((err, subjects) => {
    if (err) {
      return res.status(400).json({
        error: "NO subjects found",
      });
    }
    res.json(subjects);
  });
};

exports.updateSubject = (req, res) => {
  // console.log(req.Subject)
  const subject = req.subject;
  subject.name = req.body.name;

  subject.save((err, updatedSubject) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to update the Subject",
      });
    }
    res.json(updatedSubject);
  });
};

exports.removeSubject = (req, res) => {
  const subject = req.subject;

  subject.remove((err, subject) => {
    if (err) {
      return res.status(400).json({
        error: " Unable to remove Subject",
      });
    }
    res.json({
      message: `Removed Successully`,
    });
  });
};
