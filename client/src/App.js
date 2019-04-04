import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
