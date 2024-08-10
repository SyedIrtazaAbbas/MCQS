var mongoose = require("mongoose")

var quiz = new mongoose.Schema
({
    semester:String,
    question:String,
    options: [String],
    correctOption: String,

})
var qu = mongoose.model("quiz",quiz)
module.exports = qu