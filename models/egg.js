const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Egg = sequelize.define("Egg", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    color: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Egg;