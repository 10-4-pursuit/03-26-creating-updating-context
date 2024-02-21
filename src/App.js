import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';
import UserProvider from './UserProvider';
import ChangeUserName from './ChangeUserName';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UserProvider>
          <UserProfile />
          <ChangeUserName />
        </UserProvider>
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