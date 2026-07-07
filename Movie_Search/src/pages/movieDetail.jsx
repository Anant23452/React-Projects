import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie();
  }, [id]);
  console.log(id);

  async function fetchMovie() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
      );
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setMovie(null);
        setError(data.Error);
        return;
      }
    } catch (error) {
      setError("Fail to Fetch Movies");
    } finally {
      setLoading(false);
    }
    console.log(id);
    console.log(API_KEY);
  }
  if (loading) {
    return <h1>Loading👀👀</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  console.log("movie state:", movie);
  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
   <div className="max-w-4xl mx-auto min-h-screen flex flex-col md:flex-row p-4 gap-6">
  {/* Image Container */}
  <div className="imgdiv w-full md:w-1/2">
    <img 
      src={movie.Poster} 
      alt={movie.Title} 
      className="rounded w-full h-auto object-cover shadow-lg" 
    />
  </div>

  {/* Info Container */}
  <div className="info w-full md:w-1/2 text-start flex flex-col gap-3">
    <h1 className="text-3xl font-bold">{movie.Title}</h1>
    
    <div className="space-y-2">
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>IMDb:</strong> ⭐ {movie.imdbRating}</p>
    </div>

    <p className="leading-relaxed">{movie.Plot}</p>
    
    <button 
      onClick={() => navigate(-1)}
      className="bg-blue-800 hover:bg-blue-600 p-2 text-white rounded w-full md:w-fit"
    >
      ← Back
    </button>
  </div>
</div>
  );
}

export default MovieDetail;
