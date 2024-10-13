import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const dialog = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const modal = useRef();

  const gameResult = remainingTime > 0
  const score = (1 - targetTime / remainingTime  * 1000)

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return createPortal (
    <dialog ref={modal} className="result-modal">
      <h2>You {gameResult ? "win" : "lost"}</h2>
      {gameResult && <h2>Points: {score}</h2>}
      <p>The target time was {targetTime} seconds.</p>
      <p>
        You stopped the timer with <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default dialog;
