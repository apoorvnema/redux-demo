import { counterActions } from '../store';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.count);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = (num) => {
    dispatch(counterActions.increment({ value: num }));
  };

  const decrementHandler = (num) => {
    dispatch(counterActions.decrement({ value: num }));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
      </div>
      <div>
        <button onClick={() => incrementHandler(5)}>IncrementBy5</button>
        <button onClick={() => decrementHandler(5)}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
