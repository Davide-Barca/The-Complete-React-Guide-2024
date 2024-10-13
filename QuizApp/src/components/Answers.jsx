import { useState, useCallback, useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
  // Refs
  const shuffledAnswers = useRef()

  // Shuffle answers only if quiz is NOT complete
  if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answers]; // Copy Questions array
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // If result is negative position are swapped
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
