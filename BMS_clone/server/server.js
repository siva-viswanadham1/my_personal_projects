const express=require('express')
require('dotenv').config()


const app=express()

const dbConfig=require('./cofig/dbConfig')
const userRouter=require('./routes/userRouter')
const movieRouter=require('./routes/moviesRouter')
const theaterRouter=require('./routes/theaterRoutes')
app.use(express.json())
app.use('/api/users',userRouter.router)
app.use('/api/movies',movieRouter.router)
app.use('api/theater',theaterRouter.router)


app.listen(9000,()=>{
    console.log('server is started')
})