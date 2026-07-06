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
}
console.log(id);
return (
  <div>

  </div>
)


export default MovieDetail