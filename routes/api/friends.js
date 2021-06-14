const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router.route("/")
  .post(tripsController.associateFriendTrip)

router.route("/:id")
  .get(tripsController.getFriends)

router
  .route("/newFriend/:id")
  .post(tripsController.addNewFriend)

module.exports = router;
