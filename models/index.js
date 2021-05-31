const Travellers = require("./Travellers");
const Trip = require("./Trip");
const User = require("./User");

User.belongsToMany(Trip, {
  through: {
  model: Travellers,
  unique: false
}
});

Trip.belongsToMany(User, {
  through: {
    model: Travellers,
    unique: false
  }
});

module.exports = { User, Travellers, Trip };
