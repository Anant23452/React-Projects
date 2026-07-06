import React from 'react'
import {Link} from 'react-router-dom'

export const MovieCard = ({movie, addToWatchlist,removeToWatchlist,isWatchlist}) => {
  console.log(movie)
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
     <Link to={`/movie/${movie.imdbID}`}> 
      <img src = {movie.Poster} alt ={movie.Title} className="w-full h-auto object-cover mb-4 rounded"></img>
      </Link>
      <h2 className="text-lg font-semibold">{movie.Title}</h2>z
      {/* <h3>imdb: {movie.imdbID}</h3> */}
      <p className="text-gray-400">{movie.Year}</p>
     {isWatchlist?(
      <button onClick={()=>removeToWatchlist()} className='bg-red-600 hover:bg-red400 text-white p-1 rounded'>Remove</button>):(
       <button onClick={()=>addToWatchlist(movie)} className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-700">
        Add to Watchlist
      </button>
     )}
     
    </div>
  )
}
