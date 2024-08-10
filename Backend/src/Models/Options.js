var mongoose = require("mongoose")

var optionSchema = new  mongoose.Schema((
{
    text:String,
    isCorrect: Boolean
}))
var op = mongoose.model("options",optionSchema)
module.exports = op
