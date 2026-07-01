import { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (task.trim() === "") {
      return;
    }
    setTodos([...todos,{text: task, completed: false}]);
    setTask("");
  }
  function deleteTodo(index){
    let newtodo =todos.filter((todo,i)=>{
      return i !== index;
    })
    setTodos(newtodo);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-800 p-8">
        <h1 className="text-4xl font-extrabold !text-blue-600 border-b-2 p-2  ">
          Todos App 📕
        </h1>
        <p className="text-white mt-4">Current Task: {task}</p>

        <div className="input-container p-4 rounded-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
          >
            <input
              type="text"
              placeholder="write a task"
              className="border-2 border-gray-300 p-2 rounded-lg w-80 m-2 "
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
              Add
            </button>
          </form>
        </div>
            
        <div className="filters flex justify-center gap-4 p-4 rounded-lg">
          <button>All</button>
          <button onClick={()}>
            Active</button>
          <button>Completed</button>
        </div>



        <div className="show-todo border-2 border-gray-300 p-4 rounded-lg max-w-3xl m-auto max-h-[400px] overflow-y-auto ">
          {todos.map((todo, index) => {
            return (
              <div
                className="task-box flex justify-between  items-center bg-gray-200 p-2 rounded-lg m-2"
                key={index}
              >
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span>{todo}</span>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-10 h-10 "
                  onClick={() => deleteTodo(index)}
                >
                  🗑
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
