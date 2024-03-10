const router = require('express').Router()
const Movie = require('../models/moviesModel')

// add the movie
router.post('/add', async (req, res) => {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        res.send({
            success: true,
            message: 'Movie created'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }    
})
// get movie
router.get('/getAllMovies',async (req,res)=>{
    try {
        const movies=await Movie.find()
        res.send({
            success: true,
            message:'data fetch successfully',
            data:movies
        })
    } catch (error) {
        res.send({
            success:false,
            message:'Something went wrong',
            data: error
        })
    }
})



// // delete movie
router.delete('/delete',async(req,res)=>{
    try {
        
        const Id=await req.body._id
        if(!Id){
            return res.send({
                success: false,
                message: 'movie not found',
                data:req.body
            })
        }
        const deleteMovie=await Movie.findByIdAndDelete(Id)
        if(!deleteMovie){
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }
        res.send({
            success:true,
            message:"movie deleted sucessfully",
            
        })
    } catch (error) {
        res.send({
            success:false,
            message:"something went wrong"
        })
    }
})

// //Update the movie

router.put('/update',async(req,res)=>{

    try {
        const Id=await req.body.data._id
        if(!Id){
            return res.send({
                success: false,
                message: 'movie not found'
            })
        }
        const updateMovie=await Movie.findByIdAndUpdate(Id,req.body.data)
        if(!updateMovie){
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }
        res.send({
            success:true,
            message:"movie updated sucessfully",
            
        })
    } catch (error) {
        res.send({
            success:false,
            message:"something went wrong"
        })
    }
})

exports.router=router