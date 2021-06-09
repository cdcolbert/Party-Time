const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router.route("/")
  .get(tripsController.findTrip)
  .post(tripsController.createTrip);

router
  .route("/:id")
  .get(tripsController.findById)

module.exports = router;
