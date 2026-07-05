import React from 'react'

export const MovieCard = (props) => {
  console.log(props)
  return (
    <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">{props.name}</h2>
      <p className="text-gray-400">{props.year}</p>
    </div>
  )
}
