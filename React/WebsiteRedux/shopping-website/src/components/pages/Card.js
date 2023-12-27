import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'



const Card = () => {
  const items=useSelector(state=>state.cart)
  const dispacher=useDispatch();
  const removeItem=itemId=>{
    dispacher(remove(itemId))
  }
  return (
    <div className='cartWrapper'>
      {
        items.map(item=>{
          return<div className='cartCard'>
            <img src={item.image} alt='product'/>
            <h5>{item.title}</h5>
            <h5>Price: ${item.price}</h5>
            <button className='remove-btn' onClick={()=>removeItem(item.id)}>Remove from cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Card