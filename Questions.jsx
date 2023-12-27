// Questions.js
import React, { useState, useEffect } from 'react';

function Questions({ question, correct, incorrect, showResults, onAnswerSelected }) {
  // State to manage shuffled answers and the selected answer
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Effect to shuffle answers when the question or answers change
  useEffect(() => {
    // Shuffle the answers, placing the correct answer in a random position
    const shuffled = [correct, ...incorrect].sort(() => Math.random() - 0.5);

    // Update the state with the shuffled answers
    setShuffledAnswers(shuffled);

    // Reset selected answer when answers change
    setSelectedAnswer(null);
  }, [correct, incorrect]);

  // Function to handle button click (selecting an answer)
  const handleButtonClick = (answer) => {
    // If showResults is false, update the selected answer and pass it to the parent component
    if (!showResults) {
      setSelectedAnswer(answer);
      onAnswerSelected(answer);
    }
  };
 console.log(selectedAnswer)
  // Render the UI
  return (
     
    <div className="questions-page">
       <div className='random-shape'></div>
       <div className='random-shape2'></div>
      <h2>{question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</h2>
      <div className="choices">
        {shuffledAnswers.map((answer, index) => (
          <button className='choice'
            key={index}
         
            style={{
              backgroundColor:
                showResults && answer === correct
                  ? '#59E391' // Correct answer color
                  : !showResults && answer === selectedAnswer
                  ? '#99a7f2' // Selected answer color
                  : showResults && answer === selectedAnswer
                  ? '#F8BCBC' // Color for selected answer in showResults state
                  : 'white' // Default color
            }}
            disabled={showResults}
            onClick={() => handleButtonClick(answer)}
          >
            {answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
          </button>
        ))}
      </div>
      <hr />
      {/* {showResults && (
        <div>
          <p>{`Correct answer: ${correct}`}</p>
        </div>
      )} */}
    </div>
  );
}

export default Questions;
