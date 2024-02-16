import React, { useState } from 'react'

const MultipleInputForm = () => {
    const [formData,setFormData]=useState({firstName:"",lastName:""})
    const handleInput=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]: value}) // this is short hand notation of below commented code
        // let newForm={
        //     firstName:formData.firstName,
        //     lastName:formData.lastName
        // }
        // if(name=="firstName"){
        //     newForm.firstName=value
        // }else if(name=="lastName"){
        //     newForm.lastName=value
        // }
        // setFormData(newForm);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(`First Name is ${formData.firstName}.`)
        console.log(`Last Name is ${formData.lastName}.`)
        setFormData({firstName:"",lastName:""})
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
            <h1>Form</h1>
            <input type='text' placeholder='Enter First name' name="firstName" value={formData.firstName} onChange={handleInput}></input>
            <input type='text' placeholder='Enter Last name' name="lastName" value={formData.lastName} onChange={handleInput}></input>
            <button>Submit</button>
       </form>
    </div>
  )
}

export default MultipleInputForm