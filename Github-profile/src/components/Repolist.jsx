import { useState } from "react";
import React from "react";
import Repoitems from "./Repoitems";

export default function Repolist({ repos }) {
  const [sortType, setSortType] = useState("most-stars");
  const [currentPage, setCurrentPage] = useState(1);

  let sortedRepos = [...repos];
  if (sortType === "most-stars") {
    sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } else if (sortType === "newest") {
    sortedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else if (sortType === "oldest") {
    sortedRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }
  const repoPerPage = 5;
  const lastRepoIndex = currentPage * repoPerPage;
  const firstRepoIndex = lastRepoIndex - repoPerPage;
  const currentRepos = sortedRepos.slice(firstRepoIndex, lastRepoIndex);
  const totalPages = Math.ceil(repos.length / repoPerPage);

  console.log(repos);
  return (
    repos.length > 0 && (
      <>
        <h2 className="text-bold">All Repository</h2>
        <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
          <button
            onClick={() => setSortType("More-star")}
            className="bg-yellow-700 hover:bg-yellow-500 text-white p-2 rounded"
          >
            More-star
          </button>
          <button
            onClick={() => setSortType("Newest")}
            className="bg-slate-700 hover:bg-slate-500 text-white p-2 rounded"
          >
            Newest
          </button>
          <button
            onClick={() => setSortType("oldest")}
            className="bg-red-700 hover:bg-red-500 text-white p-2 rounded"
          >
            oldest
          </button>
        </div>
        <div className="repo  w-full h-full grid  grid-cols-2 md:grid-cols-3 gap-3 p-5 md:p-3">
          {currentRepos.map((repo) => (
            <Repoitems repo={repo} />
          ))}
        </div>
        <div className="disable-button flex  justify-evenly gap-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ⬅️Previous
          </button>
          <p>{currentPage}</p>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next➡️
          </button>
        </div>
      </>
    )
  );
}
