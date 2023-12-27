import React, { useEffect, useState } from 'react' 
import { add } from './store/cartSlice';
import {useDispatch, useSelector} from 'react-redux'
import { STATUS, fectchProduct } from './store/productSlice';


const Products = () => {
    const{data : products, status }=useSelector(state => state.product)
    const dispacher=useDispatch()
    useEffect(()=>{
        // const getData=async ()=>{
        // //   const response=await axios.get('https://fakestoreapi.com/products')
        // //   console.log(response)
        // //   setProducts(response.data)
        // }
        // getData();
        dispacher(fectchProduct())
    },[])
    
    const addItem=item=>{
        dispacher(add(item))
    }
    if(status === STATUS.LOADING){
        return <h2>Loading..</h2>
    }
    if(status===STATUS.ERROR){
        return <h2>Some thing went wrong</h2>
    }
  return(

    <div className='productsWrapper'>
        {
            console.log(`kk ${products}`)
        }
      {
        products.map(product=>{
          return <div className='card'>
            <img src={product.image}/>
            <h6>{product.title}</h6>
            <h5>{`$ ${product.price}`}</h5>
            <button className='btn' onClick={()=>addItem(product)}>Add to cart</button>
          </div>
       
        })
      }
    </div>
  )
}

export default Products