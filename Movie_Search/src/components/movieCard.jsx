import React from 'react'

export const MovieCard = ({movie, addToWatchlist}) => {
  console.log(movie)
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <img src = {movie.Poster} alt ={movie.Title} className="w-full h-auto object-cover mb-4 rounded"></img>
      <h2 className="text-lg font-semibold">{movie.Title}</h2>
      {/* <h3>imdb: {movie.imdbID}</h3> */}
      <p className="text-gray-400">{movie.Year}</p>
      <button onClick={()=>addToWatchlist(movie)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Watchlist
      </button> 
    </div>
  )
}
