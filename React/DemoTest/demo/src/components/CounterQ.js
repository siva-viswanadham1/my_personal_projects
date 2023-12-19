import {useEffect, useState} from 'react'

const CounterQ = () => {
    const [counter,setCounter]=useState(1);
    const handleIncriment=()=>{
        setCounter(counter+1);
    }
    const handleDecrement=()=>{
        if(counter>0){
            setCounter(counter-1);
        }
    }
  return (
    <div>
        <div>Counter: {counter}</div>
        <button onClick={handleIncriment}>Incriment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterQ