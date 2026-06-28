import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-800 p-8">
        <h1 className="text-4xl font-extrabold !text-blue-600 border-b-2 p-2  ">
          Todos App 📕
        </h1>

        <div className="input-container flex justify-center gap-3 p-4">
          <input
            type="text"
            placeholder="write a task"
            className="border-2 border-gray-300 p-2 rounded-lg w-80  "
          ></input>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-30 m-auto">
            Add
          </button>
        </div>

        <div className="filters flex justify-center gap-4 p-4 rounded-lg">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <div className="show-todo border-2 border-gray-300 p-4 rounded-lg max-w-3xl m-auto max-h-[400px] overflow-y-auto ">



          <div className="task-box flex justify-between  items-center bg-gray-200 p-2 rounded-lg m-2">
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <span>Task</span>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-10 h-10 ">
              🗑
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
