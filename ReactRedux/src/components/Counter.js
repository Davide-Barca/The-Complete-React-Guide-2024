import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  function handleIncrement(){
    dispatch(counterActions.increment())
  }

  function handleDecrement(){
    dispatch(counterActions.decrement())
  }

  function handleIncrease(){
    dispatch(counterActions.increase({newValue: 5}))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.showCounter && <div className={classes.value}>{counter.value}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase +5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
