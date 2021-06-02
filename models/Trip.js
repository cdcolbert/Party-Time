const { Model, DataTypes } = require('sequelize');
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
        date_range: {
            type: DataTypes.STRING,
            allowNull: false
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
        dates_selected: {
            type: DataTypes.DATE,
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
