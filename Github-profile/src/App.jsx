import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Loading from "./components/Loading";
import Errormsg from "./components/Errormsg";
import Profilecard from "./components/Profilecard";

function App() {
  const [username, setUsername] = useState("");
  // fetching data in form of object
  const [user, setUser] = useState(null);
  // if object not found then it is in null state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchUser = async () => {
      if(username.trim()==""){
    setError("Please Enter Username")
    setUser(null);
    return;
  }
    setError("");
    setUser(null);
    setLoading(true);
    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setUser(data);
      } else {
        setUser(null);
        setError("User not found");
        return;
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
   
  };
 


  return (
    <>
      <div className="main">
        <h1>Github profile fetch</h1>
      <Searchbar
       username={username}
       setUsername={setUsername}
       fetchUser ={fetchUser} 
      />
      
        
        <Loading loading ={loading}/>
        <Errormsg error={error}/>
        <Profilecard user={user}/>

        


        
         
        
      </div>
    </>
  );
}

export default App;
