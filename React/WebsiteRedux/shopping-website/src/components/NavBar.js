import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const items = useSelector(state => state.cart)
  return (
    <div
    style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }}
    >
        <span className='logo'>Store</span>
        <div className='navLink'>
          <Link to="/"> Home</Link>
        </div>
        <div className='navLink'>
            <Link to='/cart'>cart</Link>
        </div>
        <span className='cartCounter'>Items: {items.length}</span>
    </div>
  )
}

export default NavBar