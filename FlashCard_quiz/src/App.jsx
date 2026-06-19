import { useState } from "react";

import "./App.css";

function App() {
  const flashCard = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?" },
    { question: "What is the chemical symbol for gold?" },
  ];

  const [currentCard,setCurrentCard]= useState(0);
  const [showAnswer,setShowAnsswer]=useState(false);
  const [score,setscore]=useState(0);

  return (
    <>
      <div>
        <h1>FlashCard Quiz</h1>
      </div>
    </>
  );
}

export default App;
