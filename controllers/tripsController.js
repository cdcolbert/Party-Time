const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findById: function(req, res) {
    db.Trip
      .findByPk(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
