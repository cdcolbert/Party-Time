const sequelize = require('../config/connection');
const { User, Trip, Travellers } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripData.json');
const travellerData = require('./travellerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await Trip.bulkCreate(tripData);

  await Travellers.bulkCreate(travellerData);
  
  process.exit(0);
};

seedDatabase();

