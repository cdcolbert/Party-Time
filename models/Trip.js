const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trip_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        possible_dates: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
        },
        activity: {
            type: DataTypes.STRING,
        },
        transport: {
            type: DataTypes.STRING,
        },
        dateVote:{
            type: DataTypes.JSON,
            allowNull: true
        },
        locationVote:{
            type: DataTypes.JSON,
            allowNull: true
        },
        activityVote:{
            type: DataTypes.JSON,
            allowNull: true
        },
        transportVote:{
            type: DataTypes.JSON,
            allowNull: true
        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
    }
);

module.exports = Trip;
