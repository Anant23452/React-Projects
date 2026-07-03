import { useState } from 'react'
import './App.css'


      

function App() {
  
      const[place,setPlace]=useState('')
      const[weather,setWeather]=useState(null)
      let apiKey="b8151c19872033488d3a87b28b67b210";
     

      
       async function fetchWeather(){
         console.log("fetchWeather called");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        // console.log(response)
        const data=await response.json();
        console.log(data);
        setWeather(data);
       }
       
      
  return (
    <>
    <div className="parent">
     <h1 className="font-bold bg-blue-500">Weather App🌤️</h1>
     <div className="body   h-screen bg-gradient-to-tr from-grey-800 to-slate-700 ">


      {/* //search box */}

      <div className="search border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 border-b-2 ">
        <h3>current city:{place}</h3>
         <form action="" onSubmit={(e)=>{
          e.preventDefault();
          fetchWeather();

         }}>
          <input type="text" placeholder='search location'  className=" bg-white p-3 my-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  z-10 " value={place} onChange={(e)=>setPlace(e.target.value)} />
         <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Search</button>
         </form>
      </div>

      {/* //weather conversion  */}
      <div className="weather-conversion  my-2 flex justify-center items-center gap-2 ">
        <button className="bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-blue-600">°C</button>
        <button className="bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-blue-600">°F</button>
      </div>

    {/* main div  */}
    <div className="main flex justify-center items-center gap-2  p-4  w-full max-h-screen  md:flex-row flex-col">

      {/* //weather info */}
      <div className="one bg-gray-600 p-4 rounded-md w-1/2 h-full  md:flex-row">
      <h1>{weather?.name} </h1>
      <h2>{weather?.main.temp}°C</h2>
      <h1>🌤️</h1>
      
      </div>
      <div className="second  p-4 rounded-md w-1/2   h-full flex flex-col  items-start gap-2">
      <h2 className='border-2 mx-2 p-2'>Humidity: <span>{weather?.main.humidity} </span></h2>
      <h2 className='border-2 mx-2 p-2'>Wind : <span>{weather?.wind.speed} </span></h2>
      <h2 className='border-2 mx-2 p-2'>Feels Like : <span>{weather?.main.feels_like} </span></h2>
      {/* weather description */}
      <h2>Weather Description : {weather?.weather[0].description}</h2>
      </div>
    </div>
     {/* forecast */}
     </div>
      <div className="forecast  p-4 rounded-md w-full  h-screen bg-grey-200">
        <h1>5-Day Forecast</h1>
        <div className="forecast-cards flex justify-center items-center gap-2">
          <div className="card bg-gray-600 p-4 rounded-md w-1/5 h-full  md:flex-row">
            <h2>Mon</h2>
            <h2>30°C</h2>
            <h1>🌤️</h1>
          </div>  
          <div className="card bg-gray-600 p-4 rounded-md w-1/5 h-full  md:flex-row">
            <h2>Tue</h2>
            <h2>32°C</h2>
            <h1>🌤️</h1>
          </div>
          <div className="card bg-gray-600 p-4 rounded-md w-1/5 h-full  md:flex-row">
            <h2>Wed</h2>
            <h2>28°C</h2>
            <h1>🌧️</h1>
          </div>
          <div className="card bg-gray-600 p-4 rounded-md w-1/5 h-full  md:flex-row">
            <h2>Thu</h2>
            <h2>31°C</h2>
            <h1>🌤️</h1>
          </div>
          <div className="card bg-gray-600 p-4 rounded-md w-1/5 h-full  md:flex-row">
            <h2>Fri</h2>
            <h2>29°C</h2>
            <h1>🌧️</h1>
          </div>  
        </div>
     </div>
    </div>
    </>
  )
}


export default App
