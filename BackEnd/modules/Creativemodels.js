const mongoose = require("mongoose");
const CreativeSchema = mongoose.Schema({
  name:String,
  email:{type:String,unique:true},
  phno:String,
  password:String,
  isverified:{type:Boolean,default:false}
},{timestamps:true});
const creativeModel = new mongoose.model("Creative",CreativeSchema);

module.exports = creativeModel;