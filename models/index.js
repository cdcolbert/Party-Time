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

User.hasMany(Travellers);
Travellers.belongsTo(User);
Trip.hasMany(Travellers);
Travellers.belongsTo(Trip);

module.exports = { User, Travellers, Trip };
