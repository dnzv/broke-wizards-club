import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="m-6 p-6 rounded shadow-xl">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-base">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
