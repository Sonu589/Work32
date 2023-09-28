import React from "react";
function QuizResult(props) {
  const {
    score,
    totalScore,
    tryAgain,
    quizQuestions,
    userAnswers,
    showReport,
    setShowReport,
  } = props;

  return (
    <>
      {showReport ? (
        <div className="report-container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "blue",
            }}
          >
            Quiz Report
          </h2>
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              {quizQuestions.map((question, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{question.question}</td>
                  <td>{question.options[userAnswers[index] - 1]}</td>
                  <td>{question.options[question.answer - 1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="Buttons"
            style={{
              marginLeft: "150px",
              marginTop: "100px",
              alignItems: "center",
            }}
          >
            <button id="next-button" onClick={tryAgain}>
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="Score4">
            <h1 className="Score1">
              Your Score: <p className="Score3">{score}</p>
            </h1>
          </div>
          <div className="Score4">
            <h1 className="Score2">
              Total Score: <p className="Score3">{totalScore}</p>
            </h1>
          </div>
          <button
            id="next-button"
            className="hello"
            onClick={() => setShowReport(true)}
          >
            Show Report
          </button>
          <div className="Buttons">
            <button id="next-button" onClick={tryAgain}>
              Try Again
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default QuizResult;
