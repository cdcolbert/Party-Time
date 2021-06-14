const router = require("express").Router();
const tripRoutes = require("./trips");
const userRoutes = require("./users");
const specificTripRoutes = require("./specifictrips");
const voteRoutes = require("./votes");
const friendRoutes = require("./friends");

// trip routes
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);
router.use("/specificTrips", specificTripRoutes);
router.use("/votes", voteRoutes);
router.use("/friends", friendRoutes);

module.exports = router;
