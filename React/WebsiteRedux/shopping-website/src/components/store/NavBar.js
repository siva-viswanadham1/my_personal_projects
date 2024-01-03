import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
        <div className='navLink'>Cart</div>
        <span className='cartCounter'>Items</span>
    </div>
  )
}

export default NavBar