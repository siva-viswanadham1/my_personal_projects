const fs=require('fs')


//const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))



const getAllProducts=(req,res)=>{
    res.send(data);
}

const getProduct=(req,res)=>{
    const {id}=req.params
    const idx=data.products.findIndex(p => id == p.id)
    if(idx===-1){
        res.send('product not found')
    }
    res.send(data.products[idx])
}
        

const deleteProduct=(req,res)=>{
    const {id}=req.params
    const index=data.products.findIndex(p=> id==p.id)
    const product=data.products[index]
    data.products.splice(index,1)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
}

const createProduct=(req, res)=>{
    const product=req.body
    data.products.push(product)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
}

const updateProduct=(req,res)=>{
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
}
module.exports={
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
}