import { useState } from "react";

import "./App.css";

function App() {
  const flashCard = [
    { question: "What is the capital of France?", answer: "Paris", },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter", },
    { question: "What is the chemical symbol for gold?", answer: "Au", },
  ];

  const [currentCardIndex,setCurrentCardIndex]= useState(0);
  const [showAnswer,setShowAnswer]=useState(false);
  const [score,setScore]=useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  return (
    <>
      <div>
        <h1>FlashCard Quiz qustions</h1>
        <p  > 
          {flashCard[currentCardIndex].question}
        </p>
     {/* toggle */}
       <button button onClick={() => setShowAnswer(!showAnswer)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 my-2">
        {showAnswer ?"Hide Answer":"Show Answer"}
       </button>
       {/* conditional rendering of answer */}
        {showAnswer && (
          <p>
            Answer: {flashCard[currentCardIndex].answer}
          </p>
        )}
      </div>
      <div className="next-button  bg-gray-200 box-border border-gray-400 p-2 rounded-md  flex justify-center items-center">

        {/* next button  */}
     {currentCardIndex<flashCard.length-1?(
        <button onClick ={()=>{
          setCurrentCardIndex((prevIndex)=>(prevIndex + 1) 
          // % flashCard.length
          );
        }} className="bg-gray-500 hover:bg-green-700 text-white font-bold px-2 my-2">
          Next Card
        </button>
      ):(
         quizfinished==true
      )
       
      }

      {/* previous button  */}
      {currentCardIndex%flashCard.length===0?(
       null
      ) :(
        <button className="bg-gray-500 hover:bg-green-700 text-white font-bold px-2 my-2 mx-2" onClick ={()=>{
          setCurrentCardIndex((prevIndex)=>(prevIndex - 1) % flashCard.length);
        }}>previous</button>
      )}
      {quizFinished && (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your score: {score}/{flashCard.length}</p>
        </div>)}
      </div>
    </>
  );
}

export default App;
