const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Classes
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getStudentInClass: function(req, res) {
        db.Classes
        .findById(req.params.id)
        .populate('studentArr')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Classes
            .create(req.body)
            .then(function(dbClass) {
                // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
                // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
                // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                return db.User.findOneAndUpdate({_id: req.params.id}, { $push: { classes: dbClass._id } }, { new: true });
            })
            .then(function(dbUser) {
                // If the User was updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(err => res.status(422).json(err));
    } 
};