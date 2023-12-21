import React from 'react'

const Pagination = (Props) => {
    const {pageNumberProp,next,previous}=Props
  return (
    <div className='flex flex-wrap justify-center'>
        <div onClick={previous} className='p-4 m-2 rounded-sm hover:scale-110 duration-300 bg-gray-850'>Previous</div>
        <div className='p-4 m-2 rounded-sm '>{pageNumberProp}</div>
        <div onClick={next} className='p-4 m-2 rounded-sm hover:scale-110 duration-300'>Next</div>
    </div>
  )
}

export default Pagination