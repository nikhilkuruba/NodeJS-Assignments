const express=require('express');
const router=express.Router();
const User=require('../model/user.js');
const bodyParser=require('body-parser');
const { body, param,validationResult } = require('express-validator');
router.use(bodyParser());

router.get('/',async (req,res)=>{
    const users=await User.find()
    res.json({users})
})

router.post('/',body('email').isEmail(),body('name').isAlpha() ,async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user=await User.create(req.body)
        res.json({status:"success",data:user})
        }

    catch(e){
        console.log(e)
        res.status(500).json({status:"fail",message:e.message})
        }
})

router.put('/:id',param('id').isMongoId(),async (req,res)=>{
    console.log(req.body)
    try{
        await User.updateOne({_id:req.params.id},req.body)
        return res.json({status:"success"})
    }catch(e){
        console.log(e)
        return res.status(500).json({status:"fail",message:e.message})
    }
})

router.delete('/:id',param('id').isMongoId(),async (req,res)=>{
    console.log(req.body)
    try{
        await User.deleteOne({_id:req.params.id})
        return res.json({status:"success"})
        }
    catch(e){
        console.log(e)
        return res.status(500).json({status:"fail",message:e.message})
        }
})

module.exports=router 