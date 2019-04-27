const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Student
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Student
      .create(req.body)
      .then(function(dbStudent) {
          // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
          // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
          // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
          return db.Classes.findOneAndUpdate({_id: req.params.id}, { $push: { studentArr: dbStudent._id } }, { new: true });
      })
      .then(function(dbStudents) {
          // If the User was updated successfully, send it back to the client
          res.json(dbStudents);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Student
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.commentArr))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addBehavior: function(req, res) {
    console.log(req.body);
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, { $push: { behaviors: req.body }}, {new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addComment: function(req, res) {
    console.log(req.body);
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, { $push: { commentArr: req.body }}, {new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
