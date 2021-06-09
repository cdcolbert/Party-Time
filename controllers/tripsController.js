const db = require("../models");

// Defining methods for the tripsController
module.exports = {
  findAll: function (req, res) {
    db.Trip
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findOne({
        where: { id: req.params.id }
        ,
        include: [{ model: db.Trip, through: db.Travellers }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function (req, res) {
    db.User
      .findOne({ where: req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Trip
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOrCreate: function (req, res) {
    db.User
      .findOrCreate({
        where: { authOId: req.body.authOId },
        defaults: {
          name: req.body.name,
          email: req.body.email
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
