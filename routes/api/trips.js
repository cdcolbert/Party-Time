const router = require("express").Router();
const booksController = require("../../controllers/tripsController");

router.route("/")
  .get(tripsController.findAll)
//   .post(tripsController.create);

router
  .route("/:id")
  .get(tripsController.findById)
//   .put(tripsController.update)
//   .delete(tripsController.remove);

module.exports = router;