const mongoose=require('mongoose');
const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const  loginRouter=require('./routers/login');
const postRouter=require('./routers/posts');


mongoose.connect('mongodb://localhost:27017/restapi');
const { decode } = require('jsonwebtoken');

var jwt = require('jsonwebtoken');
var SECRET='RESTAPI';

app.use(bodyParser());
app.use('/posts',(req,res,next)=>{
    console.log(req.headers.authorization)
    var token=req.headers.authorization.split("test ")[1];
    console.log(token)
    if(token === false){
       return  res.status(401).json({
            status:"failed",
            message:"token is missing"
        })
    }
    
jwt.verify(token, SECRET, async function(err, decoded) {
    console.log(decoded)
    console.log(token)

    
    if(err){
        return res.status(401).json({
            status:"failed",
            message:"invalid token"
        })
    }
    req.user=decoded.data;
    next();
  });
})

app.use('/api/v1',loginRouter);
app.use('/api/v1',postRouter);
app.listen(5000);