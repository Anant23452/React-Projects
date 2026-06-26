import { useState } from "react";

import "./App.css";

function App() {
  const flashCard = [
    { question: "What is the capital of France?", answer: "Paris" },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentCard = flashCard[currentCardIndex];

  function goToNextCard() {
    setShowAnswer(false);

    if (currentCardIndex === flashCard.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  }

  function goToPreviousCard() {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function handleCorrectAnswer() {
    setScore((prevScore) => prevScore + 1);
    goToNextCard();
  }

  function restartQuiz() {
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setScore(0);
    setQuizFinished(false);
  }

  return (
    <>
      {quizFinished ? (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your score: {score}/{flashCard.length}</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 my-2"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div>
            <h1>FlashCard Quiz Questions</h1>
            <p>
              Question {currentCardIndex + 1} of {flashCard.length}
            </p>
            <p>{currentCard.question}</p>

            <button
              onClick={() => setShowAnswer((prevShowAnswer) => !prevShowAnswer)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 my-2"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>

            {showAnswer && <p>Answer: {currentCard.answer}</p>}
          </div>

          <div className="next-button bg-gray-200 box-border border-gray-400 p-2 rounded-md flex justify-center items-center">
            {currentCardIndex > 0 && (
              <button
                className="bg-gray-500 hover:bg-green-700 text-white font-bold px-2 my-2 mx-2"
                onClick={goToPreviousCard}
              >
                Previous
              </button>
            )}

            <button
              onClick={goToNextCard}
              className="bg-gray-500 hover:bg-green-700 text-white font-bold px-2 my-2 mx-2"
            >
              {currentCardIndex === flashCard.length - 1 ? "Finish Quiz" : "Next Card"}
            </button>

            <button
              onClick={handleCorrectAnswer}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-2 my-2 mx-2"
            >
              Correct
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
