const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Issues extends Model {}

Issues.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tenant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tenant',
                key: 'id'
            }
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issue: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_scheduled: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'manager',
                key: 'id'
            }
        }
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'issues'
    }

);

module.exports = Issues;