const db = require("./db");
const Sequelize = require("sequelize");

/*
 firstName - not empty or null
 lastName - not empty or null
 email - not empty or null; must be a valid email
 imageUrl - with a default value
 gpa - decimal between 0.0 and 4.0
*/

const Student = db.define("student", {
  firstname: {
      type: Sequelize.STRING,
      allowNull: true
  },
  lastname: {
      type: Sequelize.STRING,
      allowNull: true
  },
  email: {
      type: Sequelize.STRING,
      allowNull: true
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: Sequelize.UUID
  },
  gpa: {
      type: Sequelize.DECIMAL,
  }
});

module.exports = Student;
