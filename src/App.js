import React from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import 'todomvc-app-css/index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home />
    </div>
  );
}

export default App;
