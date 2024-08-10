var mongoose = require("mongoose")
var adminSchema = new mongoose.Schema
(
    {
        aname:String,
        aemail:String,
        apassword:String,
    }
)
var adminModel = mongoose.model("admin",adminSchema)
module.exports = adminModel