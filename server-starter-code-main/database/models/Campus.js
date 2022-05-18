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
    type:  Sequelize.STRING,
    defaultValue: "https://www.google.com/search?q=college+image&sxsrf=ALiCzsbWzmYfVW0S43ssWHuIwHYW5M7VCw:1652896057272&tbm=isch&source=iu&ictx=1&vet=1&fir=A-ybcyFi6yBT3M%252CELLEBej3mfSktM%252C_%253B-APYz9rK5JwfmM%252Ck2PDdAj4hZTceM%252C_%253BohiBhz259ezqyM%252CGfFdmKKNKbHOVM%252C_%253BMdJFh2HhGh8OqM%252CSU3uRNJ89VqBLM%252C_%253BWZkNydFxF8yT7M%252CELLEBej3mfSktM%252C_%253B6pCh3_AXS7Hx6M%252CGfFdmKKNKbHOVM%252C_%253BKj9IhLoNvIhlPM%252CFq1Y4WswYn5GAM%252C_%253BB43P2tFlWklCeM%252CnVp_aQ12nmtwLM%252C_%253BwtA1b6CqI4F1lM%252Ck2PDdAj4hZTceM%252C_%253BdMfp_ebyWvIgOM%252CffeLph9j7HYERM%252C_%253Bc6gzKQg1AdBIZM%252CELLEBej3mfSktM%252C_%253BIOdcQdbRewPQdM%252CiWJN_SrnN5zY5M%252C_&usg=AI4_-kQ6-n10KMlyLX74VYr-shyJQaRLwQ&sa=X&ved=2ahUKEwj6pODSzen3AhXoQd8KHXjoDCgQ9QF6BAgREAE#imgrc=B43P2tFlWklCeM"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }
});

// Export the campus model
module.exports = Campus;