import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-4xl font-extrabold !text-blue-600 border-b-2 p-2  ">Todos App 📕</h1>
     <div className="input p-4 rounded-lg">
      <input type = "text" placeholder="write a task" className = "border-2 border-gray-300 p-2 rounded-lg w-80 m-2 "></input>
      <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-30 m-auto">Add</button>
     </div>
    
    </>
  )
}

export default App
