import React from 'react'

export default function Profilecard({user}) {
    if(!user)return null
  return (
    <>
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
    
    </>
  )
}
