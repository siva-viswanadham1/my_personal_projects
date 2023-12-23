import React from 'react'

const WatchList = () => {
  return (
    <div>
      <table className="table-fixed px-px p-4  m-4 rounded w-full bg-gray-950">
        <thead>
          <tr>
            <th className='m-4'>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genere</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody >
          <tr className='text-center ' >
            <td className='flex flex-wrap justify-self-center items-center'>
              <div className='w-[80px] h-[10vh] bg-center bg-cover md:h-[30vh] md:w-[150px] m-9 space-x-3.5 rounded-xl hover:scale-110 duration-300 flex-bottom font-bold text-center align-baseline items-end self-end flex items-end'
              style={{backgroundImage:`url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ad58253131197.5928e7ec98295.jpg)`}}
              >
                <div className='bg-gray-950 bg-opacity-60 text-slate-200 text-sm text-center  p-4 w-full '>John wick</div>
              </div>
            </td>
            <td>8.6</td>
            <td>6.8</td>
            <td>8.8</td>
            <td className='text-4xl hover:scale-110 duration-300 cursor-pointer'>-</td>
          </tr>
          <tr className='text-center ' >
            <td className='flex flex-wrap justify-self-center items-center'>
              <div className='w-[80px] h-[10vh] bg-center bg-cover md:h-[30vh] md:w-[150px] m-9 space-x-3.5 rounded-xl hover:scale-110 duration-300 flex-bottom font-bold text-center align-baseline items-end self-end flex items-end'
              style={{backgroundImage:`url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ad58253131197.5928e7ec98295.jpg)`}}
              >
                <div className='bg-gray-950 bg-opacity-60 text-slate-200 text-sm text-center  p-4 w-full '>John wick</div>
              </div>
            </td>
            <td>8.6</td>
            <td>6.8</td>
            <td>8.8</td>
            <td className='text-4xl hover:scale-110 duration-300 cursor-pointer'>-</td>
          </tr>
          <tr className='text-center ' >
            <td className='flex flex-wrap justify-self-center items-center'>
              <div className='w-[80px] h-[10vh] bg-center bg-cover md:h-[30vh] md:w-[150px] m-9 space-x-3.5 rounded-xl hover:scale-110 duration-300 flex-bottom font-bold text-center align-baseline items-end self-end flex items-end'
              style={{backgroundImage:`url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ad58253131197.5928e7ec98295.jpg)`}}
              >
                <div className='bg-gray-950 bg-opacity-60 text-slate-200 text-sm text-center  p-4 w-full '>John wick</div>
              </div>
            </td>
            <td>8.6</td>
            <td>6.8</td>
            <td>8.8</td>
            <td className='text-4xl hover:scale-110 duration-300 cursor-pointer'>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WatchList