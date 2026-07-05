import { useState } from 'react'
import{Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Home from  './pages/home'
import Watchlist from './pages/watchlist'
import MovieDetails from './pages/movieDetail'

function App() {
  

  return (
   <>
   <h1>Movie Search& Watchlist</h1>
   <div className="nav">
    <Link to="/">Home</Link>
    {"|"}
    <Link to="/watchlist">Watchlist</Link>
   </div>
    <Routes>
      <Route path="/" element ={<Home />} ></Route>
      <Route path="/watchlist" element ={<Watchlist />} ></Route>
      <Route path="/movie/:id" element ={<MovieDetails />} ></Route>
    </Routes>
   
   </>
  )
}

export default App
