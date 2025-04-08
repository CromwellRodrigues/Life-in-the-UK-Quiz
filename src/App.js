import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allFlashcards from "./flashcards";
import Confetti from "react-confetti";

const NUM_QUESTIONS = 5;

const getRandomFlashcards = () => {
  return [...allFlashcards]
    .sort(() => 0.5 - Math.random())
    .slice(0, NUM_QUESTIONS);
};

const Flashcard = ({ flashcard, markCorrect }) => {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  return (
    <div className="col-12 col-md-6 col-lg-3  mb-4 ">
      <div
        className="card text-center p-4 shadow-lg rounded flashcard"
        style={{
          height: "300px",
          cursor: "pointer",
          transition: "0.3s",
          color: "white",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          border: "10px solid rgba(255, 255, 255, 0.5)",
          backgroundColor: flipped
            ? "rgba(18, 43, 169, 0.8)"
            : "rgba(196, 18, 34, 08)",
        }}
        onClick={() => {
          console.log("flipped", flipped);
          setFlipped(!flipped);
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center", //center horizontally
          
            overflowY: "auto", // Enable vertical scrolling
            overflowX: "hidden", // Disable horizontal scrolling
            padding: "5px",
      
          }}
        >

          
          <h5 className="card-title ">
            {flipped ? flashcard.answer : flashcard.question}
          </h5>
        </div>
      </div>

      {flipped && (
        <div className="d-flex justify-content-center mt-2">
          <button
            className="btn btn-success btn-sm"
            onClick={() => {
              if (!answered) {
                markCorrect(true); // Mark as correct
                setAnswered(true); // disable further clicks
              }
            }}
            disabled={answered} // Disable button if already answered
          >
            I knew it!
          </button>
          <button
            className="btn btn-danger btn-sm ms-2"
            onClick={() => {
              if (!answered) {
                markCorrect(false); // Mark as incorrect
                setAnswered(true); // disable further clicks
              }
            }}
            disabled={answered} // Disable button if already answered
          >
            I didn't know that!
          </button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [flashcards, setFlashcards] = useState(getRandomFlashcards());

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti

  const markCorrect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswered(answered + 1);

    if (answered === NUM_QUESTIONS - 1) {
      if (isCorrect && score + 1 === NUM_QUESTIONS) {
        setShowConfetti(true); // Show confetti when the quiz is finished
        setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
        // alert(
        //   `Quiz finished! Your score is ${score + (isCorrect ? 1 : 0)} out of 5.`
        // );
      }
      setFlashcards(getRandomFlashcards());
      setScore(0);
      setAnswered(0);
    }
  };

  return (
    <div className="container text-center mt-5">
      {showConfetti && <Confetti />}
      {/* Render confetti when showConfetti is true */}
      <h1 className=" mb-4"> 💂​ Life in the UK Quiz 💂​ </h1>
      <p className="lead">
        Test your knowledge about the UK with this fun quiz!
      </p>
      <div className="progress my-3" style={{ height: "30px" }}>
        <div
          className="progress-bar bg-success"
          style={{
            width: `${(answered / NUM_QUESTIONS) * 100}%`,
          }}
        >
          {answered} / {NUM_QUESTIONS} Answered
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h4 className="mt-3">
          Score: {score} / {NUM_QUESTIONS}
        </h4>

        <button
          className="btn btn-primary mt-4"
          onClick={() => {
            setFlashcards(getRandomFlashcards());
          }}
        >
          🔀 Shuffle Flashcards
        </button>
      </div>

      <div className="row mt-4">
        {flashcards.map((card) => (
          <Flashcard key={card.id} flashcard={card} markCorrect={markCorrect} />
        ))}
      </div>

      <button
        className="btn btn-primary mt-4"
        onClick={() => {
          setFlashcards(getRandomFlashcards());
        }}
      >
        🔀 Shuffle Flashcards
      </button>
    </div>
  );
};

export default App;
