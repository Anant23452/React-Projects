import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function MovieDetail() {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(()=>{
    fetchMovie()
  },[id])



 async function fetchMovie(id) {


    setLoading(true);
    setError("");


    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,)
      const data = await response.json();
      console.log(data)
      if (data.response === true) {
        setMovie(data)

      }
      else {
        setMovie(null);
        setError(data.Error)
        return;
      }
    } catch (error) {
      setError("Fail to Fetch Movies")
    }finally{
      setLoading(false)
    }
  }
  if(loading){
    return <h1>Loading👀👀</h1>
  }
  if(error){
    return <h2>{error}</h2>
  }
  if(!movie){
    return <h2>Movie not found</h2>
  }
}

return (
  <div className="max-w-5xl mx-auto p-6" >
    <img src={movie.Title} alt={movie.Poster} className='w-72 rounded' />
    <h1>{movie.Title}</h1>
    <p><strong>Year</strong>:{movie.Year}</p>
    
    <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
       <p><strong>IMDb:</strong> ⭐ {movie.imdbRating}</p>
       
    <p>{movie.Plot}</p>
  </div>
)


export default MovieDetail