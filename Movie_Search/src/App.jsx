import{Routes,Route,Link} from 'react-router-dom'
import {useState,useEffect} from  'react'
import Home from  './pages/home'
import Watchlist from './pages/watchlist'
import MovieDetails from './pages/MovieDetail'
import { toast } from "react-toastify";


function App() {
//watchlist state
  const [watchlist, setWatchlist] = useState(() => {
  const saved = localStorage.getItem("watchlist");
  return saved ? JSON.parse(saved) : [];
});
// second useeffect to get the watchlist from local storage when the component mounts
    // useEffect(()=>{
    //   const storedWatchlist = localStorage.getItem('watchlist');
    //   if(storedWatchlist){
    //     setWatchlist(JSON.parse(storedWatchlist))
    //   }
    // },[])



//first useeffect to save the watchlist to local storage whenever it changes
   useEffect(()=>{
      localStorage.setItem(
        'watchlist',
      JSON.stringify(watchlist))
    },[watchlist])

    

   
  //  function to add movie to watchlist
   function addToWatchlist(movie){
    // console.log("movie added to watchlist",movie)
    

   

    // function to add movie to watchlist
    setWatchlist((prev)=>{

      //  console.log("Previous watchlist:", prev);


      // check if movie is already in watchlist
      const isMovieInWatchlist= prev.some((item)=>item.imdbID===movie.imdbID);

      // console.log("Already exists?", isMovieInWatchlist);

      if(isMovieInWatchlist){
        toast.error("Movie is already in watchlist");
        return prev;
      }else{
        toast.success("Movie added to watchlist!");
        return [...prev,movie];
      }
    })
   }
   function removeToWatchlist(id){
    setWatchlist((prev) =>
    prev.filter((movie) => movie.imdbID !== id)
  );
  
  toast.success("Movie removed from watchlist!");
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
         <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeToWatchlist={removeToWatchlist} />} />
         <Route path="/movie/:id" element={<MovieDetails />} />
       </Routes>
     </main>
   </div>
   </>
  )
}

export default App
