import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicComponent from './components/BasicComponent'
import MyFirstComponent from './components/MyFirstComponent'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Profile Workshop</h2>
        </div>

        <div className="App-intro">
          <BasicComponent />
          <MyFirstComponent />
        </div>

      </div>
    );
  }
}

export default App;
