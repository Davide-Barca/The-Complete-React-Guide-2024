import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, time }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(time * 1000)

  const timerActive = timeRemaining >= 1 && timeRemaining < time * 1000

  if(timeRemaining <= 0){
    handleStop()
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open()
  }

  function onReset(){
    setTimeRemaining(time * 1000)
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={time} remainingTime={timeRemaining} onReset={onReset} />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {time} {time > 1 ? "seconds" : "second"}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
}
