import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = () => {
   const [movieData,setMovieData]=useState([])
   const [pageNumber,setPageNumber]=useState(1)
   const [watchList,setWatchList]=useState([])
  const getTrendingMovies=()=>{
    axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c585cc57748118ea84f6c89514fa98c2&page=${pageNumber}`)
    .then(response =>{
      console.log(response)
      setMovieData(response.data.results)
    })
  }
  useEffect(()=>{
    getTrendingMovies();
  },[pageNumber])

  const nextPage=()=>{
    setPageNumber(pageNumber+1)
  }
  const previousPage=()=>{
    if(pageNumber>1){
      setPageNumber(pageNumber-1)
    }
  }
  const addWatchList=(movie)=>{
    let newWatchList=[...watchList,movie]
    setWatchList(newWatchList);
  }
  const removeWatchList=(movie)=>{
    let newWatchList=watchList.filter((movieId)=>{
      return movie!==movieId
    })
    setWatchList(newWatchList)
  }
  const showAddIcon=(movie)=>{
    return <div onClick={()=>addWatchList(movie)}>+</div>
  }
  const showRemoveIcon=(movie)=>{
    return <div onClick={()=>removeWatchList(movie)}>-</div>
  }
  const isMoiveInWatchList=(movie)=>{
    return watchList.includes(movie)
  }
  const moviesInWatchList=()=>{
    console.log(watchList)
  }
  

 
  
  return (
    <div>
        <div className='text-2xl font-bold m-8'>Trending Movies</div>
        <div className='flex flex-wrap flex-bottom align-text-bottom'>
          {
          movieData.map(movie=>{
            return<div key={movie.id}>
              <div className='w-[106px] h-[30vh] bg-center bg-cover md:h-[40vh] md:w-[180px] m-9 space-x-3.5 rounded-xl hover:scale-110 duration-300 flex-bottom font-bold text-center align-baseline items-end self-end flex items-end'
              style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`}}
              >
                
                <div className='bg-gray-950 bg-opacity-60 text-slate-200 text-sm text-center  p-4 w-full '>{movie.title}</div>
                <div className='top-1 end-0 m-2 bg-gray-900 opacity-60 border px-0 py-0  text-2xl w-6 hover:scale-110 hover:bg-sky-700 cursor-pointer absolute'>
                  {
                    isMoiveInWatchList(movie.id) ? showRemoveIcon (movie.id) : showAddIcon(movie.id)
                  }
                </div>
               
              </div>
              
            </div>
          })}
               
        </div>
        <Pagination pageNumberProp={pageNumber} next={nextPage} previous={previousPage}/>
        {
          moviesInWatchList()
        }
    </div>
  )
  
}

export default Movies