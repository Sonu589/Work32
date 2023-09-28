import React from "react";
import "./Report.css";
function Report({ quizQuestions, userAnswers }) {
  return (
    <div className="report-container">
      <h1 style={{ textAlign: "center" }}>Quiz Report</h1>
      <table>
        <thead>
          <tr>
            <th>Question Number</th>
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
    </div>
  );
}

export default Report;
