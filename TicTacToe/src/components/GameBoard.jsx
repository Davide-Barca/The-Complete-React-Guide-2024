import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       // Copy previous game board in an immutably way
  //       const updatedBaord = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];

  //       // Update game board state
  //       updatedBaord[rowIndex][colIndex] = activePlayerSymbol;

  //       // Assign/return updated board
  //       return updatedBaord;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
