import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function MovieDetail() {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  function fetchMovie(id) {


    setLoading(true);
    setError("");

    
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,)
      const data = await response.json();
      if (data.response === true) {
        setMovie(data.id)
      }
      else {
        setMovie(null);
        setError("data not found")
      }
    } catch (error) {
      setError("Fail to Fetch Movies")
    }finally{
      setLoading(false)
    }
  }
}
console.log(id);
return (
  <div>

  </div>
)
}

export default MovieDetail