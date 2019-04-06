import React, { Component } from 'react';
import NavMenu from './components/Nav';
import './App.css';

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
