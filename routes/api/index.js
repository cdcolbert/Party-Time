const router = require("express").Router();
const tripRoutes = require("./trips");
const userRoutes = require("./users");

// trip routes
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);

module.exports = router;
