import React from 'react'
import Logo from '../MovieLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex bg-gray-900 border-transparent space-x-10 item-center pl-3 py-4 w-full'>
        <img src={Logo} className='w-[50px]'/>
        <Link to='/' className='w-24 text-center hover:scale-110  duration-200'>Movies</Link>
        <Link to='/watchlist' className='w-24 text-center hover:scale-110 duration-200'>Watch List</Link>
    </div>
  )
}

export default NavBar