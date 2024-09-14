import { createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.value };
    case 'DECREMENT':
      return { count: state.count - action.value };
    default:
      return state;
  }
};  

const store = createStore(counterReducer);

export default store;