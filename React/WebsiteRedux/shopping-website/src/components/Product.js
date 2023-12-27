import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import { add } from './store/cartSlice';
import {useDispatch} from 'react-redux'


const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const getData=async ()=>{
          const response=await axios.get('https://fakestoreapi.com/products')
          console.log(response)
          setProducts(response.data)
        }
        getData();
    },[])
    
    const dispacher=useDispatch()
    const addItem=item=>{
        dispacher(add(item))
    }
  return(

    <div className='productsWrapper'>
      {
        products.map(product=>{
          return <div className='card'>
            <img src={product.image}/>
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            <button className='btn' onClick={()=>addItem(product)}>Add to cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Products