import { createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENTBY5':
        return { count: state.count + 5 };
    case 'DECREMENTBY5':
        return { count: state.count - 5 };
    default:
      return state;
  }
};  

const store = createStore(counterReducer);

export default store;