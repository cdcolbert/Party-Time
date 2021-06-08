const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router.route("/")
  // .get(tripsController.findAll)
//   .post(tripsController.create);

router
  .route("/:id")
  .get(tripsController.findUser)
//   .put(tripsController.update)
//   .delete(tripsController.remove);

module.exports = router;
