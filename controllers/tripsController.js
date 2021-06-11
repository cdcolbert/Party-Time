const db = require("../models");

// Defining methods for the tripsController
module.exports = {
  findTrip: function (req, res) {
    db.Trip
      .findOne({
        where: { id: req.params.id },
        include: [{ model: db.User }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findOne({
        where: { id: req.params.id }
        ,
        include: [{
          model: db.Trip
          // , through: db.Travellers 
        }]
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
  createTrip: function (req, res) {
    db.Trip
      .create({
        trip_name: req.body.trip_name,
        location: req.body.location,
        activity: req.body.activity,
        transport: req.body.transport
      },
        {
          include: db.User
        })
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
  },
  newAssociation: function (req, res) {
    db.Travellers
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateVote: function (req, res) {
    db.Trip
      .update({
        dateVote: req.body.voteData,
        locationVote: req.body.locationData,
        activityVote: req.body.activityData,
        transportVote: req.body.transportData
      },
      {
        where: {id: req.body.trip}
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  isUserAdmin: function (req, res) {
    db.Travellers
      .findOne({
        where: req.body
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
