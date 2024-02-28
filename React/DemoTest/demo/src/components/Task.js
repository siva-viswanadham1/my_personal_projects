import React, { useState } from 'react'

const Task = () => {
    const [counter,setCounter]=useState(0);

    const incriment=()=>{
        setCounter(counter+1);
    }
    const decriment=()=>{
        if(counter>0){
            setCounter(counter-1)
        }
    }

  return (
    <div>
        <div>Counter : {counter}</div>
        <button onClick={incriment}>Incriment</button>
        <button onClick={decriment}>decriment</button>
    </div>
  )
}

export default Task