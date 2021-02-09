//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument

// Load the 'student' controller to use User methods create and list
var student = require("../controllers/student.server.controller");
//Load the 'comment' controller
//var comment = require("../controllers/comment.server.controller");
//
//handle routing for get and post request
module.exports = function (app) {
  //handle a get request made to root path
  app.get("/", student.render); //go to http://localhost:3000/
};
