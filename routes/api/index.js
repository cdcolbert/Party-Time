const router = require("express").Router();
const tripRoutes = require("./trips");
const userRoutes = require("./users");
const specificTripRoutes = require("./specifictrips");

// trip routes
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);
router.use("/specificTrips", specificTripRoutes);

module.exports = router;
