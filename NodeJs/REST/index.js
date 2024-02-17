const express=require('express');

const app=express()
const fs=require('fs')
const productRoute=require('./routes/productRoutes')

app.use(express.json())
app.use('/',productRoute.myRouter)




app.listen(8080,()=>{
    console.log('server is started')
})

