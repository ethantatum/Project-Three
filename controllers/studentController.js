const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Student
      .find(req.query)
      .sort({ name: -1 })
      .then(db => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Student
      .findById(req.params.id)
      .populate('commentArr')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
