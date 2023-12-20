import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh]    md:h-[60vh] bg-no-repeat bg-center flex items-end flex-wrap'  
    style={{
        backgroundImage: `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)` 
     }}
     >
        <div className='text-xl md:text-3xl bg-gray-950 bg-opacity-60 text-slate-200 text-center p-4 w-full'>John Wick</div>
       
    </div>
  )
}

export default Banner