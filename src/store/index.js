import { configureStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENTBY2':
        return { count: state.count + 2 };
    case 'DECREMENTBY2':
        return { count: state.count - 2 };
    default:
      return state;
  }
};  

const store = configureStore({counterReducer});

export default store;