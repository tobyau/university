const db = require("./db");
const Sequelize = require("sequelize");
/*
name - not empty or null
 imageUrl - with a default value
 address - not empty or null
 description - extremely large text
*/

const Campus = db.define("campus", {
  name: {
      type: Sequelize.STRING,
      allowNull: true
  },
  imageUrl: {
      defaultValue: Sequelize.UUID
  },
  address: {
      type: Sequelize.STRING,
      allowNull: true
  },
  description: {
      type: Sequelize.TEXT('big')
  }
});

module.exports = Campus;