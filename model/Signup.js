
const mongoose=require("mongoose")
let sc=mongoose.Schema;
const userSchema = new sc({
    firstName: String,
    phone: String,
    email: String,
    username: String,
    password: String,
  });
  
  var signupmodel =mongoose.model("User",userSchema)
  module.exports =signupmodel;

