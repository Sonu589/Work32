import React, { useState } from "react";
import Quiz from "./components/Quiz";
import ParticlesBg from "particles-bg";
import EmailValidationModal from "./EmailValidationModal";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setShowQuiz(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="particles-container">
        <ParticlesBg type="fountain" bg={true} />
      </div>
      {!showQuiz ? (
        <div className="start-page">
          <h1>Welcome to the Quiz App</h1>
          <p>Please enter your email address to start the quiz:</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleEmailSubmit}>Start Quiz</button>
        </div>
      ) : (
        <Quiz />
      )}
      <EmailValidationModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
