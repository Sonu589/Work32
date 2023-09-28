import React, { useState, useEffect } from "react";
import QuizResult from "./QuizResult";
import Report from "./Report";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [totalTime] = useState(30 * 60);
  const [quizEndTime, setQuizEndTime] = useState(Date.now() + totalTime * 1000);
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);

  const fetchQuizQuestions = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=15");
      const data = await response.json();
      const fetchedQuestions = data.results.map((questionData) => {
        const options = [
          ...questionData.incorrect_answers,
          questionData.correct_answer,
        ];

        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
        return {
          question: questionData.question,
          options: options,
          answer: options.indexOf(questionData.correct_answer) + 1,
        };
      });
      setQuizQuestions(fetchedQuestions);

      setTimeLeft(10);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const timeRemaining = Math.max(0, (quizEndTime - currentTime) / 1000);
      setTimeLeft(Math.floor(timeRemaining));

      if (timeRemaining <= 0) {
        clearInterval(timer);

        submitQuiz();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [quizEndTime]);

  const changeQuestion = (questionIndex = currentQuestion + 1) => {
    updateScore();
    if (questionIndex < quizQuestions.length) {
      document.querySelector(".container").setAttribute("hidden", true);

      setTimeout(() => {
        document.querySelector(".container").removeAttribute("hidden");
        setCurrentQuestion(questionIndex);
        setClickedOption(0);
        setTimeLeft(10);
      }, 300);
    } else {
      setShowResult(true);
    }

    if (!visitedQuestions.includes(questionIndex)) {
      setVisitedQuestions([...visitedQuestions, questionIndex]);
    }

    if (!attemptedQuestions.includes(questionIndex)) {
      setAttemptedQuestions([...attemptedQuestions, questionIndex]);
    }
  };

  const updateScore = () => {
    if (clickedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const submitQuiz = () => {
    setShowResult(true);
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setUserAnswers([]);
    setShowReport(false);
    fetchQuizQuestions();
    setQuizEndTime(Date.now() + totalTime * 1000);
  };

  const handleAnswerSelect = (optionIndex) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = optionIndex;
      return updatedAnswers;
    });
    setClickedOption(optionIndex);
  };

  return (
    <div className="quiz-container">
      <div className="overview-panel">
        <h2>Overview</h2>
        {quizQuestions.map((question, index) => (
          <div
            key={index}
            className={`question-box ${
              showReport
                ? "visited"
                : attemptedQuestions.includes(index)
                ? "attempted"
                : "not-attempted"
            }`}
            onClick={() => changeQuestion(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="quiz-content">
        <div className="timer">
          Time Left: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")} minutes
        </div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
          {showResult ? (
            <QuizResult
              score={score}
              totalScore={quizQuestions.length}
              tryAgain={resetAll}
              quizQuestions={quizQuestions}
              userAnswers={userAnswers}
              showReport={showReport}
              setShowReport={setShowReport}
            />
          ) : showReport ? (
            <Report quizQuestions={quizQuestions} userAnswers={userAnswers} />
          ) : (
            <>
              <div className="question">
                <span id="question-number">{currentQuestion + 1}. </span>
                <span id="question-txt">
                  {quizQuestions[currentQuestion]?.question}
                </span>
              </div>
              <div className="option-container">
                {quizQuestions[currentQuestion]?.options.map((option, i) => {
                  return (
                    <button
                      className={`option-btn ${
                        clickedOption === i + 1 ? "checked" : null
                      }`}
                      key={i}
                      onClick={() => handleAnswerSelect(i + 1)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <input
                type="button"
                value="Next"
                id="next-button"
                onClick={() => changeQuestion(currentQuestion + 1)} // Add this line
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
