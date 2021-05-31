const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Travellers extends Model { }

Travellers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trip_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'trip',
                key: 'id',
                unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'travellers'
    }
);

module.exports = Travellers;
