import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'

function App() {
  const [joke,setJoke] =useState("");
  const [error,setError]=useState(false);
  const[loading,setLoading]=useState(true);

   async function fetchJoke() {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(data.setup + " " + data.punchline);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
   <>
   <h1 className="text-3xl font-bold ">Random Joke😂</h1>
    {loading && <p className="text-blue-500">👀Loading...</p>}
    {error && <p className="text-red-500">Error fetching joke</p>}
    <p className="text-lg">{joke}</p>

    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-30 m-auto" onClick={fetchJoke}>
      {error ? "Try Again" : "Get Joke"}
    </button>
   </>
  )
}

export default App
