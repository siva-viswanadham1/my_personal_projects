import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const incrmient=()=>{
        setCounter(counter+1)
    }
  return (
    <>
    <h1>Counter:{counter}</h1>
    <button onClick={incrmient}>increment</button>
    </>
  )
}

export default Counter