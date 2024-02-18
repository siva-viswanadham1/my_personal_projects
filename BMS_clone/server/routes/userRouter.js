const router=require('express').Router()
const User=require('../models/userModel')
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
            const newUser=new User(user)
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

exports.router=router