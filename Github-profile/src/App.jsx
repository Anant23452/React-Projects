import {useState } from 'react';
import './App.css'; 




function App() {
  const[username,setUsername]=useState("")

  

 

  

  return (
    <>
    <div className="main">
      <h1>Github profile fetch</h1>
      <form action="submit">
        <input type="text" value={username} onChange={(e)=>e.target.value} />
        <button className='bg-blue-600 hover:bg-blue-500 p-2 rounded'>search</button>
      </form>
    </div>
    
    </>
  )
}

export default App
