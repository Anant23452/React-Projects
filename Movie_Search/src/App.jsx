import{Routes,Route,Link} from 'react-router-dom'
import {useState} from  'react'
import Home from  './pages/home'
import Watchlist from './pages/watchlist'
import MovieDetails from './pages/movieDetail'


function App() {

   //watchlist state
   const [watchlist, setWatchlist]=useState([]);
  //  function to add movie to watchlist
   function addToWatchlist(movie){

    //useEffect

    useEffect(()=>{
      localStorage.setItem(
        'watchlist',
      JSON.stringify(watchlist))
    },[watchlist])

    // function to add movie to watchlist
    setWatchlist((prev)=>[...prev,movie])
   }

  return (
   <>
   <h1>Movie Search& Watchlist</h1>
   <div className="flex flex-col gap-3">
     <nav className="nav bg-gray-800 p-4 text-white flex justify-center space-x-4 gap-3">
      <Link to="/">Home</Link>
      {"|"}
      <Link to="/watchlist">Watchlist</Link>
      {"|"}
      <Link to="/movie/:id">Movie Details</Link>
     </nav>
     <main className="px-4">
       <Routes>
         <Route path="/" element={<Home
          addToWatchlist={addToWatchlist}
         />} />
         <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
         <Route path="/movie/:id" element={<MovieDetails />} />
       </Routes>
     </main>
   </div>
   </>
  )
}

export default App
