import React from 'react'

function watchlist({watchlist,removeToWatchlist}) {
  return (
    <>
    <div className = "watchlist-parent mx-auto w-full bg-gray-600 text-white">
      <h1 className="text-2xl font-bold py-2"> MyWatchlist ❤️</h1>
      <div className="movie grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchlist.map((movie)=>(
          <div className="key overflow-hidden rounded-lg bg-gray-700 shadow-lg transition-transform duration-300 hover:scale-105" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title}></img>
            <h2 className="text-lg font-semibold">{movie.Title}</h2>
            <p className="text-gray-400">{movie.Year}</p>
       
          </div>
        ))}
        </div>
        
      </div>
    </>
  )
}

export default watchlist