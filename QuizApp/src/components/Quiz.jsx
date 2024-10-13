// React Hooks
import { useState, useCallback } from "react";

// Components
import Summary from "./Summary.jsx";

// Data
import QUESTIONS from "../questions.js";
import COMPLETE_LOGO from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  // States
  const [userAnswer, setUserAnswer] = useState([]);

  // Compute values
  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // Functions
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswer((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    [activeQuestionIndex]
  );

  const handleTimeout = useCallback(
    function handleTimeout() {
      handleSelectAnswer(null);
    },
    [handleSelectAnswer]
  );

  // Render
  if (quizIsComplete) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} // This key prop tells to react to recreate this component when activeQuestionIndex changes
        index={activeQuestionIndex}
        onSelect={handleSelectAnswer}
        onTimeout={handleTimeout}
      />
    </div>
  );
}
