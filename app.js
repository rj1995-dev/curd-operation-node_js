//require express module
var express = require("express");
//require body-parser module
var bodyParser = require("body-parser");
//require mongodb
var mongoDB = require("mongoose");
//Give the mongodb connection path
var Db = "mongodb://test:r25071995@ds145895.mlab.com:45895/testing";
//give the port number
var port = 8800;
//call express function
var app = express();
//connect MongoDb
mongoDB.connect(Db, { useNewUrlParser: true });
//middleware connection
//import router module
var abc = require("./router/tests");

//call the middle ware bodyparser json() urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//cross origin start
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
//cross origin end
//create route http://localhost:8800/testing
app.use("/testing", abc);

//this is test opration for http://localhost:8800/testing
app.get("/", function(req, res) {
  res.send("work get operation");
});

//this is server watching path
app.listen(port, function(req, res) {
  console.log("server is started: " + port);
});
