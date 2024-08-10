var mongoose = require("mongoose")

var question =  new mongoose.Schema({
    question:String,
})
var questionsc = mongoose.model("question",question)
module.exports = questionsc
