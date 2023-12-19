import React from 'react'

function Mycomponent(props) {
  let {name,age,company}=props;
  return (
    <div>Name: {name}, Age: {age} , Comapany: {company} </div>
  )
}

export default Mycomponent