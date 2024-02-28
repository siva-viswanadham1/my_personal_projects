import React from 'react'

const Test2 = (props) => {
    const {counter}=props
    console.log(props)
  return (
    <div>ans:{props.counter}</div>
  )
}

export default Test2