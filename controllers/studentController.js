const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.students
      .find(req.query)
      .sort({ name: -1 })
      .then(db => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.students
      .findById(req.params.id)
      .populate('commentArr')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.students
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
