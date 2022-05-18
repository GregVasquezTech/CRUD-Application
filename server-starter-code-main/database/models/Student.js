/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F10%2F05%2F22%2F37%2Fblank-profile-picture-973460_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&tbnid=ScRGRFGMiXHWfM&vet=12ahUKEwip8pK3zun3AhXPqXIEHT_4DuoQMygAegUIARDLAQ..i&docid=wg0CyFWNfK7o5M&w=640&h=640&q=blank%20person%20image&ved=2ahUKEwip8pK3zun3AhXPqXIEHT_4DuoQMygAegUIARDLAQ"
  },

  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

// Export the student model
module.exports = Student;