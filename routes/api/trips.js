const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// Matches with "/api/books"

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(tripsController.findById)
module.exports = router;
