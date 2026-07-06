import React from 'react'
import { MovieCard } from '../components/MovieCard'

function watchlist({watchlist,removeToWatchlist}) {
  if (watchlist.length === 0) {
  return (
    <h2 className="text-center text-gray-500">
      ❤️ Your watchlist is empty.
    </h2>
  );
}
  return (
    <>
    <div className = "watchlist-parent mx-auto w-full bg-gray-600 text-white">
      <h1 className="text-2xl font-bold py-2"> MyWatchlist ❤️</h1>
      <div className="movie grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchlist.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            removeToWatchlist={removeToWatchlist}
            isWatchlist={true}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default watchlist