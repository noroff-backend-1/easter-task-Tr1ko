const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("easter_db", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;