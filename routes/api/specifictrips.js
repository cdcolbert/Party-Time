const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router.route("/")
// .get(tripsController.findTrip)
.post(tripsController.newAssociation)

router.route("/:id")
.get(tripsController.findTrip)

module.exports = router;
