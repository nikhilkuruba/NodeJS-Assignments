const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{type:String},
    email:{type:String,required:true,unique:true},
    password:String
    },
    
    {timestamps:true}
    );
    
const User=mongoose.model('Users',userSchema);
module.exports=User;