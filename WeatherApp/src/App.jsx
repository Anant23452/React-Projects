import { useState } from 'react'
import './App.css'

      

function App() {
  

  return (
    <>
     <h1 className="font-bold bg-blue-500">Weather App🌤️</h1>
     <div className="body   h-screen bg-gradient-to-tr from-grey-800 to-slate-700 ">


      {/* //search box */}

      <div className="search border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 border-b-2 ">
         <input type="text" placeholder='search location' label="Search Location" className=" bg-white p-3 my-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  z-10 " />
         <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Search</button>
      </div>

      {/* //weather conversion  */}
      <div className="weather-conversion  my-2 flex justify-center items-center gap-2">
        <button className="bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-blue-600">°C</button>
        <button className="bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-blue-600">°F</button>
      </div>

    {/* main div  */}
    <div className="main flex justify-center items-center gap-2  p-4  w-full max-h-screen">

      {/* //weather info */}
      <div className="one bg-gray-600 p-4 rounded-md w-1/2 h-full  md:flex-row">
      <h1>Delhi</h1>
      <h2>30°C</h2>
      <h1>🌤️</h1>
      
      </div>
      <div className="second  p-4 rounded-md w-1/2   h-full flex flex-col  items-start gap-2">
      <h2 className='border-2 mx-2 p-2'>Humidity: 35%</h2>
      <h2 className='border-2 mx-2 p-2'>Wind : 12 km/h</h2>
      <h2 className='border-2 mx-2 p-2'>Feels Like : 35°C</h2>
      {/* weather description */}
      <h2>Weather Description : Clear Sky</h2>
      </div>
    </div>

     </div>
    </>
  )
}

export default App
