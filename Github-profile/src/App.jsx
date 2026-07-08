import {useState } from 'react';
import './App.css'; 




function App() {
  const[username,setUsername]=useState("");
  // fetching data in form of object 
  const [user, setUser] = useState(null);
  // if object not found then it is in null state 
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const fetchUser = async () => {
    setError("");
    setLoading(true);
    const url = `https://api.github.com/users/${username}`;
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      if(response.ok){
        setUser(data);
      }else{
        setUser(null);
      setError(data.message);
        return;

      }

    }catch(err){
      setError("Something went wrong");
    }finally{
      setLoading(false)
    }
  }
  

 

  

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
        fetchUser()
       }}
       >
        <input 
         value={username}
          onChange={(e)=>setUsername(e.target.value)}
           className='border-2 border-gray-700 hover:border-gray-400 p-2 rounded-xl w-74'
           placeholder='username'
            />
        <button className='bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-xl'>search</button>
      </form>
      {user &&<h1>{user.name}</h1>}
    </div>
    
    </>
  )
}

export default App
