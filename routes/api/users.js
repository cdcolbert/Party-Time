const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router.route("/")
  .post(tripsController.findOrCreate)

router
  .route("/:id")
  .get(tripsController.findUser)

module.exports = router;
