const TimeTable = require("../models/geo");

exports.getTimeTableById = (req, res, next, id) => {
  // console.log(id)
  TimeTable.findById(id).exec((err, TimeTable) => {
    if (err || !TimeTable) {
      return res.status(400).json({
        error: "No TimeTable found in the database",
      });
    }
    req.TimeTable = TimeTable;
    next();
  });
};
exports.createTimeTable = (req, res) => {
  const TimeTable = new TimeTable(req.body);
  TimeTable.save((err, TimeTable) => {
    if (err) {
      return res.status(400).json({
        error: " NOT able to save TimeTable in DB",
      });
    }
    res.json({ TimeTable });
  });
};
exports.getTimeTable = (req, res) => {
  console.log("eee");
  return res.json(req.TimeTable);
};

exports.getAllTimeTable = (req, res) => {
  TimeTable.find().exec((err, TimeTable) => {
    if (err) {
      return res.status(400).json({
        error: "NO TimeTable found",
      });
    }
    res.json(TimeTable);
  });
};

exports.updateTimeTable = (req, res) => {
  // console.log(req.TimeTable)
  const TimeTable = req.TimeTable;
  TimeTable.name = req.body.name;

  TimeTable.save((err, updatedTimeTable) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to update the TimeTable",
      });
    }
    res.json(updatedTimeTable);
  });
};

exports.removeTimeTable = (req, res) => {
  const TimeTable = req.TimeTable;

  TimeTable.remove((err, TimeTable) => {
    if (err) {
      return res.status(400).json({
        error: " Unable to remove TimeTable",
      });
    }
    res.json({
      message: `Removed Successully`,
    });
  });
};
