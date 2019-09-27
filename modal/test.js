//require mongoes
var mongoDB = require("mongoose");
//define schema
var Schema = mongoDB.Schema;
//create property of schema
var testSchema = new Schema({
  Usn: {
    type: String,
    required: "This field is required"
  },
  Name: {
    type: String,
    required: "This field is required"
  },

  Phone: {
    type: String,
    required: "This field is required"
  },
  Address: {
    type: String,
    required: "This field is required"
  }
});
//export mongodb schema
module.exports = mongoDB.model("won_api_data", testSchema);
