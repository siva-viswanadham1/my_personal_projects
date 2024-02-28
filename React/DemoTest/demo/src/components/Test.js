import React, { useState } from 'react'
import Test2 from './Test2' 
const Test = () => {
    const button1Clicked=()=>{
        window.alert()
    }
    const button2Clicked=()=>{
        window.alert('button 2 is clicked')
    }
    const [counter,setCounter]=useState(1)
  return (
    <div>
        <p>clicked</p>
        <button onClick={button1Clicked}>This button one</button>
        <button onClick={button2Clicked}>this is button 2</button>
        <Test2 counter/>
    </div>
  )
}

export default Test