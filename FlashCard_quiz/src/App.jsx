import { useState } from "react";

import "./App.css";

function App() {
  const flashCard = [
    { question: "What is the capital of France?", answer: "Paris",answer: "Paris", },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter", },
    { question: "What is the chemical symbol for gold?", answer: "Au", },
  ];

  const [currentCardIndex,setCurrentCardIndex]= useState(0);
  const [showAnswer,setShowAnswer]=useState(false);
  const [score,setScore]=useState(0);

  return (
    <>
      <div>
        <h1>FlashCard Quiz qustions</h1>
        <p  > 
          {flashCard[currentCardIndex].question}
        </p>
     {/* toggle */}
       <button button onClick={() => setShowAnswer(!showAnswer)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2">
        {showAnswer ?"Hide Answer":"show Answer"}
       </button>
       {/* conditional rendering of answer */}
        {showAnswer && (
          <p>
            Answer: {flashCard[currentCardIndex].answer}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
