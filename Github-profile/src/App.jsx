import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  // fetching data in form of object
  const [user, setUser] = useState(null);
  // if object not found then it is in null state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchUser = async () => {
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
  if(username.trim()==""){
    setError("Please Enter Username")
  }


  return (
    <>
      <div className="main">
        <h1>Github profile fetch</h1>
        <form
          action="submit"
          className=" flex  gap-4 justify-center items-center mb-2 "
          onSubmit={(e) => {
            e.preventDefault();
            //function
            fetchUser();
          }}
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-700 hover:border-gray-400 p-2 rounded-xl w-74"
            placeholder="username"
          />
          <button className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-xl">
            search
          </button>
        </form>
        {loading && <p className="text-blue-300">Loading..👀👀👀</p> }
        {error && <p className="text-red-500">{error}</p>}


        {user && (
          <div className="profileCard flex gap-1 bg-blue-200 my-2 w-full h-screen">
            <div className="div1 w-1/4 bg-green-300 flex flex-col justify-start p-2 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden ">
                <img
                  src={user.avatar_url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-10xl ">{user.name}</h1>
              <h2>{user.login}</h2>
              <h2>
                <strong>Followers:</strong>
                {user.followers}
              </h2>
              <h2>
                <strong>Following:</strong>
                {user.following}
              </h2>
              <h1 className="text-xl">
                <strong>Company</strong> <br />
                {user.company}{" "}
              </h1>
            </div>
            <div className="div2 w-3/4 bg-red-400">
              <h1 className="text-xl">
                <strong>Bio</strong> <br /> {user.bio}{" "}
              </h1>
              <div className="repo bg-gray-700 w-32 h-32 px-4 flex justify-center flex-col gap-2 items-center">
                <h2>public repository</h2>
                <h2> {user.public_repos}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
