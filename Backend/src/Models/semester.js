var mongoose = require("mongoose")

var semester = new  mongoose.Schema
(
    {
        semester:String,
    }
)

var semmodel = mongoose.model("semester",semester)
module.exports = semmodel


