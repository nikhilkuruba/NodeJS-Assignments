const unique = require('faker/lib/unique');
const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:unique},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    profession:{type:String,required:true},
   isPromoted :{type:Boolean,default:null}
  });
const User=mongoose.model('user',userSchema);

module.exports= User