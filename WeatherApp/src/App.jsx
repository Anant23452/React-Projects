import { useState } from 'react'
import './App.css'

      

function App() {
  

  return (
    <>
     <h1 className="font-bold bg-blue-500">Weather App🌤️</h1>
     <div className="body relative  h-screen bg-gradient-to-tr from-grey-800 to-purple-700 ">
      <div className="search border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 border-b-2 ">
         <input type="text" placeholder='search location' label="Search Location" className="relative bg-white p-3 my-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  z-10 " />
         <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Search</button>
      </div>
     </div>
    </>
  )
}

export default App
