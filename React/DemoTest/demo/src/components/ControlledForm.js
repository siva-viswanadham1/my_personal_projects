import React from 'react'
import { useState } from 'react';

const ControlledForm = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }
    const handleSumbit=(e)=>{
        e.preventDefault()
        console.log(firstName);
        console.log(lastName)
    }
  return (
    <div>
        <form onSubmit={handleSumbit}>
            <h1>From</h1>
            <input type="text" placeholder="Enter First name" value={firstName} onChange={handleFirstName}></input>
            <input type="text" placeholder="Enter Last name" value={lastName} onChange={handleLastName}></input>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm