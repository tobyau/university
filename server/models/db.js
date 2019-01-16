const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/uni");

module.exports = db