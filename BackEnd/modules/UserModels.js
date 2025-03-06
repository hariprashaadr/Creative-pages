const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
 name: String,
  email: String,
  phno: String,
  password: String 
});
const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;