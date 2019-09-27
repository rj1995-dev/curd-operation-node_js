//require mongoes
var mongoDB = require("mongoose");
//define schema
var Schema = mongoDB.Schema;
//create property of schema
var testSchema = new Schema({
  Usn: String,
  Name: String,
  Phone: String,
  Address: String
});
//export mongodb schema
module.exports = mongoDB.model("won_api_data", testSchema);
