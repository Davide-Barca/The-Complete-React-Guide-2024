import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div className="modal"></div>
      <div id="challenges">
        <TimerChallenge title="EASY" time={1} />
        <TimerChallenge title="NOT EASY" time={5} />
        <TimerChallenge title="GETTING TOUGH" time={10} />
        <TimerChallenge title="PROS" time={20} />
      </div>
    </>
  );
}

export default App;
