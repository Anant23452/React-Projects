import React from 'react'
import{useState,useEffect} from 'react'

function home() {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const [search,setSearch]=useState("");
    const [movies,setMovies] =useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        fetchMovies(search);
    }
    async function fetchMovies(movieName){
        console.log(API_KEY);
    }
  return (
  <div className="home-parent mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-gray-600 p-3"
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
  </div>
  )
}

export default home