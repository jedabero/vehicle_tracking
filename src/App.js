import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import * as firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="App-main">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;