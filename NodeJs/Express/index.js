const express=require('express')

const app=express()

const port=8080

const autentaion=(req,res,next)=>{
    const {key}=req.query
    if(key==123){
        next()
    }else{
        res.sendStatus(401)
    }
}

//app.use()
app.get('/',(req, res)=>{
    console.log("route /")
    res.send('hello world')
})
app.get('/user/:id',autentaion,(req,res)=>{
    const param=req.params
    const quary=req.query
    //console.log(param)
    res.send(`userId is ${param.id} and ${quary.key}`)
})
app.get('/something', (req,res)=>{
    res.send({name : 'siva'})
})
app.listen(port,()=>{
    console.log(`server is app running in port ${port} `)
})