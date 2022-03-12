const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require('body-parser')
mongoose.connect("mongodb://localhost:27017/dogsDB");
const user = require("./views/schema.js");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.set("views","./views");
app.set("view engine","ejs");
app.use(methodOverride("_method"));

app.get("/",async(req,res) => {
    const users= await user.find()
    res.render("index.ejs",{users})
})
app.get("/form",(req,res) => {
    res.render("form.ejs")

})

app.post("/user/add",(req,res)=>{
    user.create({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession
    })
    res.redirect("/");
})

app.put("/user/:id",async(req,res)=>{
    await user.updateOne({_id:req.params.id},{isPromoted:true});  
    res.redirect("/");
})

app.delete("/user/:id",async(req,res)=>{
    await user.deleteOne({_id:req.params.id});
    res.redirect("/");
})

app.listen(3000);