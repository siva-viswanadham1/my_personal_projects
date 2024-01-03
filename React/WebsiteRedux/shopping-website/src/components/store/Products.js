import React, { useEffect, useState } from 'react'
import axios from 'axios' 

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
  return(

    <div className='productsWrapper'>
      {
        products.map(product=>{
          return <div className='card'>
            <img src={product.image}/>
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            <button className='btn'>Add to cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Products