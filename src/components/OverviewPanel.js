import React from "react";

function OverviewPanel({
  quizQuestions = [],
  visitedQuestions = [],
  attemptedQuestions = [],
  setVisitedQuestions,
  setAttemptedQuestions,
}) {
  const changeQuestion = (index) => {
    if (!visitedQuestions.includes(index)) {
      setVisitedQuestions([...visitedQuestions, index]);
    }
  };

  return (
    <div className="overview-panel">
      <h2>Overview</h2>
      {quizQuestions.map((question, index) => (
        <div
          key={index}
          className={`question-box ${
            visitedQuestions.includes(index) ? "visited" : ""
          } ${
            attemptedQuestions.includes(index) ? "attempted" : "not-attempted"
          }`}
          onClick={() => changeQuestion(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default OverviewPanel;
