import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

function home({addToWatchlist}) {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   function 
  function handleSubmit(e) {
    e.preventDefault();
    fetchMovies(search);
  }

  //function
  async function fetchMovies(search) {
    console.log(API_KEY);
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
      );
      const data = await response.json();
      console.log(data)
      if (data.Response === "False") {
        //handle error
        setMovies([]);
        setError(data.Error || "something went wrong");
        return;
    } else {
        setMovies(data.Search);
    }
} catch (error) {
    setError("Failed to fetch movies");
} finally {
        
      setLoading(false);
    }
  }
  return (
    <div className="home-parent mx-auto w-full  bg-gray-600  text-white">

        {/* search button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-gray-600 p-3 max-w-xl mx-auto"
      >
        <input
          type="text"
          placeholder="search for a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="min-w-[200px] flex-1 rounded border border-gray-300 p-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>


      {/* loading feature */}
      {loading && <h2 className="py-4 text-center">Loading...</h2>}

      {error ? (
        <div className="flex w-full justify-center py-8">
          
            <p className="text-red-500">{error}</p>
          
        </div>
      ) : (
        <div className="movie grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-800 p-4">
          {movies.map((movie) => (
            <MovieCard 
            key={movie.imdbID}
            movie={movie}
            addToWatchlist={addToWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default home;
