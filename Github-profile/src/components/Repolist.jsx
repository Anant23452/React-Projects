import { useState } from "react";
import React from "react";
import Repoitems from "./Repoitems";

export default function Repolist({ repos }) {
   const [sortType, setSortType] = useState("most-stars");
  let sortedRepos = [...repos];
  if (sortType === "most-stars") {
    sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } else if (sortType === "newest") {
    sortedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else if (sortType === "oldest") {
    sortedRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }
  console.log(repos);
  return (
    repos.length > 0 && (
      <>
        <h2 className="text-bold">All Repository</h2>
        <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
          <button
           onClick ={()=>setSortType("More-star")}
           className="bg-yellow-700 hover:bg-yellow-500 text-white p-2 rounded">
            More-star
          </button>
          <button
          onClick={()=>setSortType("Newest")}
           className="bg-slate-700 hover:bg-slate-500 text-white p-2 rounded">
            Newest
          </button>
          <button
          onClick={()=>setSortType("oldest")}
           className="bg-red-700 hover:bg-red-500 text-white p-2 rounded">oldest</button>
        </div>
        <div className="repo  w-full h-full grid  grid-cols-2 md:grid-cols-3 gap-3 p-5 md:p-3">
          {sortedRepos.map((repo) => (
            <Repoitems repo={repo} />
          ))}
        </div>
      </>
    )
  );
}
