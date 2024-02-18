const express=require('express')
require('dotenv').config()

const app=express()
const dbConfig=require('./cofig/dbConfig')
const userRouter=require('./routes/userRouter')
app.use(express.json())
app.use('/api/users',userRouter.router)


app.listen(8080,()=>{
    console.log('server is started')
})