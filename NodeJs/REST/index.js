const express=require('express');

const app=express()
const fs=require('fs')

const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
//GET endpoint
app.get('/products',(req,res)=>{
    res.send(data);
})
app.get('/products/:id',(req,res)=>{
    const param=req.params
    const product=data.products.filter(p => param.id == p.id)
    res.send(product)
})
app.get('/',(req,res)=>{
    res.send('nothing')
})
app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    const idx=data.products.findIndex(p=>p.id==id)
    res.send(data.products[idx])
})

//middleware json
app.use(express.json())
//POST endpoint
app.post('/products',(req,res)=>{
    const product=req.body
    data.products.push(product)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(data)
})

//DELETE endpoint
app.delete('/products/:id',(req,res)=>{
    const {id}=req.params
    const index=data.products.findIndex(p=> id==p.id)
    const product=data.products[index]
    data.products.splice(index,1)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
})
//PUT endpoint
app.put('/product',(req,res)=>{
    const product=req.body
    const idx=data.products.findIndex(p=> product.id==p.id)
    if(idx===undefined){
        //create new record
        data.products.push(product)
    }else{
        data.products[idx]=product
    }
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
})
app.listen(8080,()=>{
    console.log('server is started')
})

