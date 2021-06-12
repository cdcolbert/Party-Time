const router = require("express").Router();
const tripRoutes = require("./trips");
const userRoutes = require("./users");
const specificTripRoutes = require("./specificTrips");
const voteRoutes = require("./votes");

// trip routes
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);
router.use("/specificTrips", specificTripRoutes);
router.use("/votes", voteRoutes);

module.exports = router;
