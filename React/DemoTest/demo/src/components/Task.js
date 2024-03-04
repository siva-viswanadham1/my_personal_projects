import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Task = () => {
    const [input,setInput]=useState('')
    const [data,setData]=useState([])
  
      const change=(e)=>{
        setInput(e.target.value)
      }
      const fetchData=async ()=>{ 
        const value=input
        try {
            const response = await axios.get(`https://demo.dataverse.org/api/search?q=${value}`);
            const responseData=response.data
            console.log(responseData.items)
            setData(response.data.items)
            console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        // axios.get(`https://demo.dataverse.org/api/search?q=${value}`).then(response=>{
        //     console.log(response)
        // })
      }
      useEffect(()=>{
        fetchData();
      },[input])
  
    return(
        <div>
        <input type='text' value={input} onChange={change}></input>
        </div>
    )
}

export default Task