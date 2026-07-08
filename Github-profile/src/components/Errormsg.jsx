import React from 'react'

export default function Errormsg({error}) {
    if(!error)return "";
  return (
    <>
    <div className="loading bg-gray-400 w-full h-32 flex justify-center items-center">
            <h2 className="text-red-600 text-xl font-semibold animate-pulse">{error}</h2>
          </div></>
  )
}
