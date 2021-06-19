import React from 'react';
import {useSelector} from 'react-redux';
// STORE -> GLOBALIZED STATE (JSON OBJ SAY)

// ACTION -> FUunction on an array say

// REDUCER is kinda the callback of action and changes the value of vars
// in store


function App() {
  const counter = useSelector(state => state.counter)
  if (!counter) console.log(`????`);
  return (
    <div className="App">
      <h1>
        Hello
        <h2>Counter: {counter}</h2>
      </h1>
    </div>
  );
}

export default App;
