//require express
var express = require("express");
//import the modal schema
var test = require("../modal/test");
//import router
var app = express.Router();

//start get connection
app.get("/", (req, res) => {
  test.find({}).exec(function(err, test) {
    if (err) {
      res.send("Error is occure");
    } else {
      res.json(test);
    }
  });
});
//End get connection

//Start Post operation
app.post("/", function(req, res) {
  var testing = new test();
  testing.Usn = req.body.Usn;
  testing.Name = req.body.Name;
  testing.Phone = req.body.Phone;
  testing.Address = req.body.Address;
  testing.save(function(err, test) {
    if (err) {
      res.send("Error is occure");
    } else {
      res.send(test);
    }
  });
});

//End post opration

//
//export the router
module.exports = app;
