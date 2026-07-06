import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

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
    <div className="max-w-5xl mx-auto p-6">
      <img src={movie.Poster} alt={movie.Title} className="w-72 rounded" />
      <h1>{movie.Title}</h1>
      <p>
        <strong>Year</strong>:{movie.Year}
      </p>

      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>IMDb:</strong> ⭐ {movie.imdbRating}
      </p>

      <p>{movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
