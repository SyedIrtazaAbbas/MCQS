var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Mcqs")
.then(()=>{
    console.log("connected to MongoDB")
})
.catch(()=>{
    console.error("Error connecting to MongoDB:");
})