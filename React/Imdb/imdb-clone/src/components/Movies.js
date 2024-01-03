import React from 'react'

const Movies = () => {
  return (
    <div>
        <div className='text-2xl font-bold m-8'>Trending Movies</div>
        <div className='flex '>
            <div className='w-[106px] h-[30vh] bg-center bg-cover md:h-[40vh] md:w-[180px] m-9 space-x-3.5 rounded-xl hover:scale-110 duration-300'
            style={{backgroundImage:`url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ad58253131197.5928e7ec98295.jpg)`}}
            ></div>
            <div className='w-[106px] h-[30vh] bg-center bg-cover md:h-[40vh] md:w-[180px] m-9 px-px space-x-3.5 rounded-xl hover:scale-110 duration-300'
            style={{backgroundImage:`url(https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/04/25175846/Smallfoot-Movie-Poster.jpg)`}}
            ></div>
        </div>
    </div>
  )
}

export default Movies