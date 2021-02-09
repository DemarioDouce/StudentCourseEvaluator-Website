// Load the module dependencies:
//  config.js module and mongoose module
var config = require("./config"),
var mongoose = require("mongoose");
// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose
    .connect(config.db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log("Error");
    });

  // Load the 'Comment' model
  require("../app/models/user.server.model");

    // Load the 'Student' model
    require("../app/models/student.server.model");
  
  // Return the Mongoose connection instance
  return db;

};
