const router = require('express').Router()
const Theater = require('../models/theatersModel')

// add the Theater
router.post('/add', async (req, res) => {
    try {
        const movie = new Theater(req.body)
        await movie.save()
        res.send({
            success: true,
            message: 'Theater created'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }    
})
// get Theater
// router.get('/getAllTheater',async (req,res)=>{
//     try {
//         const movies=await Theater.find()
//         res.send({
//             success: true,
//             message:'data fetch successfully',
//             data:movies
//         })
//     } catch (error) {
//         res.send({
//             success:false,
//             message:'Something went wrong',
//             data: error
//         })
//     }
// })



// // delete Theater
router.delete('/delete',async(req,res)=>{
    try {
        
        const Id=await req.body._id
        if(!Id){
            return res.send({
                success: false,
                message: 'Theater not found',
                data:req.body
            })
        }
        const deleteTheater=await Theater.findByIdAndDelete(Id)
        if(!deleteMovie){
            return res.status(404).json({
                success: false,
                message: "Theater not found",
            });
        }
        res.send({
            success:true,
            message:"Theater deleted sucessfully",
            
        })
    } catch (error) {
        res.send({
            success:false,
            message:"something went wrong"
        })
    }
})

// //Update the Theater

router.put('/update',async(req,res)=>{

    try {
        const Id=await req.body.data._id
        if(!Id){
            return res.send({
                success: false,
                message: 'Theater not found'
            })
        }
        const updateMovie=await Theater.findByIdAndUpdate(Id,req.body.data)
        if(!updateMovie){
            return res.status(404).json({
                success: false,
                message: "Theater not found",
            });
        }
        res.send({
            success:true,
            message:"Theater updated sucessfully",
            
        })
    } catch (error) {
        res.send({
            success:false,
            message:"something went wrong"
        })
    }
})

exports.router=router