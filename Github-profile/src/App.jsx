import {useState } from 'react';
import './App.css'; 




function App() {
  const[username,setUsername]=useState("");
  // fetching data in form of object 
  const [user, setUser] = useState(null);
  // if object not found then it is in null state 

  

 

  

  return (
    <>
    <div className="main">
      <h1>Github profile fetch</h1>
      <form 
      action="submit"
       className=' flex  gap-4 justify-center items-center '
       onSubmit={(e)=>{
        e.preventDefault();
        //function
       }}
       >
        <input 
         value={username}
          onChange={(e)=>e.target.value}
           className='border-2 border-gray-700 hover:border-gray-400 p-2 rounded-xl w-74'
           placeholder='username'
            />
        <button className='bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-xl'>search</button>
      </form>
    </div>
    
    </>
  )
}

export default App
