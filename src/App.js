import React, {useState} from 'react'


import logo from './logo.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(1)
  window.setCounter = setCounter
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
