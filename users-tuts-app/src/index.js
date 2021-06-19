import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import rootReducers from './reducers/index';
import { Provider } from 'react-redux';

const myStore = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



// Action like function declaration

/*const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

// Reducer  Function definition 

const counter = (state=0, action) => {
    switch (action.type) {
      case "INCREMENT":
        state++;
        break;
      case "DECREMENT":
        state--;
        break;
      default:
        break;
    }
}

// store  Global variable sort of that is like an array
// Task manager like thing keeps track of the funcs in analogy
let store = createStore(counter);
store.subscribe(()=> (
  console.log(store.getState())))


// Dispatch => Task Manager fires the task
store.dispatch(increment());
*/
ReactDOM.render(
  <Provider store={myStore} > 
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
