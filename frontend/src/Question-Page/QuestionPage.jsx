import React, { useState, useEffect } from "react";

const quizData = [
  {
    question: 'Which artist sang the hit song "Shape of You"?',
    options: ["Bruno Mars", "Justin Bieber", "Ed Sheeran", "Shawn Mendes"],
    answer: "Ed Sheeran",
  },
  {
    question: 'Which artist released the album "21" in 2011?',
    options: ["Taylor Swift", "Adele", "Lady Gaga", "Rihanna"],
    answer: "Adele",
  },
  {
    question: 'Which band or artist released the album "Thriller" in 1982?',
    options: ["Prince", "U2", "Michael Jackson", "Madonna"],
    answer: "Michael Jackson",
  },
  {
    question: 'Who is popularly called "Baddo"?',
    options: ["Wizkid", "Olamide", "Davido", "VDM"],
    answer: "Olamide",
  },
  {
    question: "Who sang the song 'Holla at your boy'?",
    options: ["Burna Boy", "Daddy Shokki", "Westlife", "Wizkid"],
    answer: "Wizkid",
  },
];

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // Set the timer duration (in seconds)
  const [selectedOption, setSelectedOption] = useState(null); // Track the currently selected option
  const [nextButtonLabel, setNextButtonLabel] = useState("Next"); // Track the button label

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup the interval on component unmount
    } else if (timeLeft === 0) {
      setShowResult(true); // Show results when time runs out
    }
  }, [timeLeft, showResult]);

  const loadQuestion = () => {
    return quizData[currentQuestionIndex];
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Update the selected option
    // Change the button label to "Submit" if it's the last question
    if (currentQuestionIndex === quizData.length - 1) {
      setNextButtonLabel("Submit");
    } else {
      setNextButtonLabel("Next");
    }
  };

  const handleNext = () => {
    const currentQuestion = loadQuestion();
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1); // Increment score if the selected option is correct
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      setShowResult(true); // Show results if it's the last question
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(1800); // Reset the timer
    setSelectedOption(null); // Reset selected option
    setNextButtonLabel("Next"); // Reset button label
  };

  const currentQuestion = loadQuestion();

  // Function to format time left into minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <h1>Movies Quiz</h1>
      <div className="timer">Time Left: {formatTime(timeLeft)}</div>
      {!showResult ? (
        <div id="quiz-container">
          <div id="question">
            <h2>{currentQuestion .question}</h2>
          </div>
          <div className="options">
            <div id="options">
              {currentQuestion.options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleOptionSelect(option)} 
                  className={selectedOption === option ? "selected" : ""} // Highlight selected option
                >
                  {option}
                </button>
              ))}
            </div>
            <button id="next-button" onClick={handleNext} disabled={!selectedOption}>
              {nextButtonLabel}
            </button>
            <div className="question-numbers">
              {quizData.map((_, index) => (
                <button
                  key={index}
                  className={`question-number ${
                    currentQuestionIndex === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div id="result">
          <h2>
            Your Score: <span id="score">{score}</span> out of {quizData.length}
          </h2>
          <button id="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;