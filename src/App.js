import React from 'react';
import logo from './logo.svg';
import './App.css';

let tWindow;

function onInputChange() {
  tWindow.postMessage('Test from A', 'http://localhost:3001/');
  console.log('changing');
}

function onClickButton() {
  tWindow  = window.open('http://localhost:3001/');
  console.log('onClickButton');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickButton}>Open New Window</button>
        <br/>
        <input onChange={onInputChange}></input>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2
        </a>
      </header>
    </div>
  );
}

export default App;
