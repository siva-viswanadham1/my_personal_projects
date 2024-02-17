const express=require('express')

const route=express.Router();

const productController=require('../controllers/productController')


route.get('/',productController.getAllProducts)
.get('/:id',productController.getProduct)
.post('/',productController.createProduct)
.delete('/:id',productController.deleteProduct)
.put('/',productController.updateProduct)

exports.myRouter=route