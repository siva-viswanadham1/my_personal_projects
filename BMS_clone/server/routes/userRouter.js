const router=require('express').Router()
const User=require('../models/userModel')
const bycypt=require('bcrypt')
router.post('/register',async (req,res)=>{
    try {
        const user=req.body
        const userExists=await User.findOne({email: user.email})
        if(userExists){
            res.send({
                success:false,
                message:'User already exists'
            })
        }else{
            const salt=await bycypt.genSalt(10)
            const hashedPassword=await bycypt.hash(user.password,salt)
            const newUser=new User({...user,password:hashedPassword})
            newUser.save()
            res.send({
                success:true,
                message:'User Successfully register'
            })
        }
    
    } catch (error) {
        console.log(error)
        res.send({
            success:false,
            message:'Internal Server error'
        })
    }

})
router.post('/login',async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if(!user){
        res.send({
            success:false,
            message:"User does not exist"
        })
    }else{
        const validPassword=await bycypt.compare(req.body.password,user.password)
        if(!validPassword){
            res.send({
                success:false,
                message:'Password incorrect'
            })
        }else{
            res.send({
                success:true,
                message:'User logined'
            })
        }
    }
})

exports.router=router