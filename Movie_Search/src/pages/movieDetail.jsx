import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function MovieDetail() {
  const [movie,setMovie]=useState(null)
  const {id} = useParams();
  function fetchMovie(id){
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,)
  const data= await response.json();
  if(data.response===true){
    setMovie(data.id)
  }
  else{
    setMovie(null);
    setError("data not found")
  }
  }
  console.log(id);
  return (
    <div>
      
    </div>
  )
}

export default MovieDetail