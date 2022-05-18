/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type:  Sequelize.STRING(5000),
    defaultValue: "https://www.uwinnipeg.ca/future-student/images/campus-photos/virtual-campus-tour-7.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING(5000),
  }
});

// Export the campus model
module.exports = Campus;