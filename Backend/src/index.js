require("./datebase/connection.js")
var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")  
var app =express()
app.use(bodyParser.json())
app.use(cors())
var User = require("./Models/User")
var Admin = require("./Models/admin")
var Options = require("./Models/Options")
var semerter = require("./Models/semester")
var quiz = require("./Models/Quiz")
var question = require("./Models/questions")



app.get("/user",(req,res)=>{
    User.find().then((u)=>{
        res.send(u)
    })
})

app.post("/Option",(req,res)=>{
    Options.create(req.body).then(()=>{
        res.send("option created")
    })
})



app.post("/user",(req,res)=>{
    User.create(req.body).then(()=>
    {
        res.send("User registered")
    })
})

app.delete("/user/:id",(req,res)=>{
    User.findByIdAndDelete({_id: req.params.id}).then(()=>{
        res.send("User deleted")
    })
})

app.post("/loginadmin",(req,res)=>{
        Admin.findOne({aemail:req.body.aemail}).then((response)=>{
            if (response.apassword === req.body.apassword) 
            {
                res.send("true")
            }
            else{
                res.send("false")
            }
        }).catch(()=>{
            res.send("false")
        })
})



app.get("/userupdate/:id",(req,res)=>{
User.findById({_id:req.params.id}).then((stuid)=>{
    res.send(stuid)
})

})


app.put("/user/:id",(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body).then(()=>{
        res.send("update done")
    })
})



app.post("/admin",(req,res)=>{
    Admin.create(req.body).then(()=>{
        res.send("Admin registered")
    
    })
})



app.post("/createsemester", (req, res) => {
    semerter.create(req.body).then(() => {
        res.send("Semester created");
    });
});

app.get("/fetchsemester", (req, res) => {
    semerter.find().then((semesters) => {
        res.send(semesters);
    });
});


app.post("/createquestion", (req, res) => {
    question.create(req.body).then(() => {
        res.send("Question Added Successfully");
    });
});

app.get("/fetchquestion", (req, res) => {
    question.find().then((u)=>{
        res.send(u)
    })
});

app.post("/createoption", (req, res) => {
    Options.create(req.body).then(() => {
        res.send("Option Added Successfully");
    });
});

app.get("/fetchoption",(req,res)=>{
    Options.find().then((u)=>{
        res.send(u)
    })
})




app.post("/createquiz", (req, res) => {
    quiz.create(req.body).then(() => {
        res.send("Quiz Added Successfully");
    });
});

app.get("/fetchquiz",(req,res)=>{
     quiz.find().then((u)=>{
        res.send(u)
     })
})



app.listen(8000)