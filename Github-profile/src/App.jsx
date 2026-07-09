import { useState,useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Loading from "./components/Loading";
import Errormsg from "./components/Errormsg";
import Profilecard from "./components/Profilecard";
import Repoitems from "./components/Repoitems";
import Repolist from "./components/Repolist";

function App() {
  const [username, setUsername] = useState("");
  // fetching data in form of object
  const [user, setUser] = useState(null);
  // if object not found then it is in null state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repos,setRepo] =useState([]);

 

 
  useEffect(() => {
    if (username.trim() === "") {
        return;
    }
    const timer = setTimeout(()=>{
      fetchUser();
    },500)
  
    return () => {
      clearTimeout(timer)
    }
  }, [username])
  
  const fetchUser = async () => {
       if(username.trim()==""){
    setError("Please Enter Username")
    setUser(null);
    setRepo([])
    return;
  }
    setError("");
    setUser(null);
    setLoading(true);
    setRepo([])
    const url = `https://api.github.com/users/${username}`;
    const url2= `https://api.github.com/users/${username}/repos`
    try {
      const response = await fetch(url);
      const data = await response.json();
      const response2= await fetch(url2);
      const repodata = await response2.json();
      console.log(data);
      if (response.ok ) {
        setUser(data);
      } else {
        setUser(null);
        setError("User not found");
        return;
      }
      if(response2.ok){
        setRepo(repodata);
      }
      else{
        setError("repo not found")
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
   
  };
 


  return (
    <>
      <div className="main w-full flex justify-center items-center px-4 flex-col">
        <h1>Github profile fetch</h1>
      <Searchbar
       username={username}
       setUsername={setUsername}
       fetchUser ={fetchUser} 
      />
      
        
        <Loading loading ={loading}/>
        <Errormsg error={error}/>
        <Profilecard user={user}/>
        <Repolist  repos ={repos}/>
       

        


        
         
        
      </div>
    </>
  );
}

export default App;
