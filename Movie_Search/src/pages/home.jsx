import React from 'react'
import{useState,useEffect} from 'react'

function home() {
    const [search,setSearch]=useState("");
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
     <input type="text"placeholder="search for a movie" value={search} onChange={(e)=>setSearch(e.target.value)}/>
     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Search
     </button>
    </form>
  )
}

export default home