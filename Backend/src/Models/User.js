var mongoose = require("mongoose")
var userSchema = new mongoose.Schema
(
    {
        uname:String,
        uemail:String,
        upassword:String   
    }
    
)
var userModel = mongoose.model("user",userSchema)
module.exports = userModel