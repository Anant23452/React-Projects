import{Routes,Route,Link} from 'react-router-dom'
import Home from  './pages/home'
import Watchlist from './pages/watchlist'
import MovieDetails from './pages/movieDetail'

function App() {
  

  return (
   <>
   <h1>Movie Search& Watchlist</h1>
   <div className="flex flex-col gap-10">
     <nav className="nav bg-gray-800 p-4 text-white flex justify-center space-x-4 gap-3">
      <Link to="/">Home</Link>
      {"|"}
      <Link to="/watchlist">Watchlist</Link>
      {"|"}
      <Link to="/movie/:id">Movie Details</Link>
     </nav>
     <main className="px-4">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/watchlist" element={<Watchlist />} />
         <Route path="/movie/:id" element={<MovieDetails />} />
       </Routes>
     </main>
   </div>
   </>
  )
}

export default App
