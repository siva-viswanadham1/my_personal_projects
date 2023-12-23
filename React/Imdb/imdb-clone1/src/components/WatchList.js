import React, { useEffect, useState } from 'react'

const WatchList = () => {
  const [favarouties,setFavaroutes]=useState([]);
  const [genres,setGenres]=useState([]);
  const [currentGenre,setCurrentGenre]=useState('All Genere')
  const setGenresFun=()=>{
    let favaroutiesGeners=[];
    for(let i=0;i<favarouties.length;i++){
      for(let j=0;j<favarouties[i].genre_ids.length;j++){
          let generName=genreIDs[favarouties[i].genre_ids[j]]
          favaroutiesGeners.push(generName);
      }
    }
    let favaroutiesGenersUnique=new Set(favaroutiesGeners)
    setGenres(["All Genre", ...favaroutiesGenersUnique])
    
  }
  useEffect(()=>{
    let newFavaroutes=JSON.parse(localStorage.getItem('Imdb'))
    
    if(newFavaroutes){
      setFavaroutes(newFavaroutes)
    } 
  },[])
  useEffect(()=>{
    setGenresFun()
    console.log(genres);
    
  },[favarouties])
  const setGenre=(genre)=>{
    setCurrentGenre(genre);
  }
  const getGenreFilter = () => {
    return genres.map((genre) => {
      return (
        <button
          className={
            currentGenre === genre
              ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
              :"m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
          }
          onClick={() => setGenre(genre)}
        >
          {genre}
        </button>
      );
    });
  };
 let genreIDs = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  let fileterMovies=[]
  fileterMovies=
    currentGenre==='All Genre'
    ?favarouties:
    favarouties.filter((movie)=>{
      return movie.genre_ids.some((id)=>{
        return genreIDs[id]===currentGenre
      }
      )
    })
  

  const moviesCard=(movie)=>{
    return(
          <tr  >
            <td className='flex flex-wrap justify-self-center items-center'>
              <div className='w-[80px] h-[10vh] bg-center bg-cover md:h-[30vh] md:w-[150px] m-9 space-x-3.5 rounded-xl hover:scale-110 duration-300 flex-bottom font-bold text-center align-baseline items-end self-end flex items-end'
              style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`}}
              >
                <div className='bg-gray-950 bg-opacity-60 text-slate-200 text-sm text-center  p-4 w-full '>{movie.title}</div>
              </div>
            </td>
            <td className=" pl-6 py-4">{movie.vote_average}</td>
            <td className=" pl-6 py-4">{movie.popularity}</td>
            <td className=" pl-6 py-4">{movie.genre_ids.map((id)=>`${genreIDs[id]} `)}</td>
            <td className='pl-6 py-4 text-4xl hover:scale-110 duration-300 cursor-pointer'>-</td>
          </tr>
      
    )
  }
  return (
    <div>
      <div className="mt-6 flex space-x-2 justify-center">
        {getGenreFilter()}
      </div>
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
         <tbody>
         {fileterMovies.map((movie) => {
              return moviesCard(movie);
            })}
         </tbody>
      </table>
    </div>
  )
}

export default WatchList