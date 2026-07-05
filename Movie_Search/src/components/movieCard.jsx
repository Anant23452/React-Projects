import React from 'react'

export const MovieCard = (props) => {
  console.log(props)
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <img src = {props.img} alt ={props.name} className="w-full h-auto object-cover mb-4 rounded"></img>
      <h2 className="text-lg font-semibold">{props.name}</h2>
      <p className="text-gray-400">{props.year}</p>
    </div>
  )
}
