import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function movieDetail() {
  const [movie,setMovie]=useState(null)
  const {id} = useParams();
  function fetchMovie(id){
    const url=
  }
  console.log(id);
  return (
    <div>
      
    </div>
  )
}

export default movieDetail