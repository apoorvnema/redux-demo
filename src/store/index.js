import { createStore } from 'redux';

const initialState = { count: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.value, showCounter: state.showCounter };
    case 'DECREMENT':
      return { count: state.count - action.value, showCounter: state.showCounter };
    case 'TOGGLE':
      return { count: state.count, showCounter: !state.showCounter };
    default:
      return state;
  }
};  

const store = createStore(counterReducer);

export default store;