import React from 'react'

export default function Loading({loading}) {
    if(!loading)return null
    

  return (
    <>
      <div className="loading bg-gray-400 w-full h-32 flex justify-center items-center">
            <h2 className="text-blue-600 text-xl font-semibold animate-pulse">Loading..👀👀👀</h2>
          </div>
    </>
  )
}
