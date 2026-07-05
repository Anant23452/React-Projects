import React from 'react'
import{useState,useEffect} from 'react'

function home() {
    const [search,setSearch]=useState("");
  return (
  <div className="home-parent mt-14 px-4">
      <form onSubmit={(e)=>{e.preventDefault()}
    }
     className="bg-gray-600 "
    >
     <input type="text"placeholder="search for a movie" value={search} onChange={(e)=>setSearch(e.target.value)}
     className="border border-gray-400 p-2 rounded border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500  " 
    />
     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Search
     </button>
    </form>
  </div>
  )
}

export default home