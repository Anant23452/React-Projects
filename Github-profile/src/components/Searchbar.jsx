import React from 'react'

export default function Searchbar({username,setUsername,fetchUser}) {
  return (
    <>
     <form
  onSubmit={(e) => {
    e.preventDefault();
    fetchUser();
  }}
  className="flex gap-4 justify-center items-center mb-6"
>
  <input
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="border-2 border-gray-300 focus:border-blue-500 outline-none py-3 px-4 rounded-xl w-80"
    placeholder="Enter Github username"
  />
  <button className="bg-blue-600 hover:bg-blue-500 py-3 px-6 rounded-xl text-white font-medium transition-colors">
    Search
  </button>
</form>
    
    </>
  )
}
