const router = require("express").Router();
const tripRoutes = require("./trips");

// trip routes
router.use("/trips", tripsRoutes);

module.exports = router;