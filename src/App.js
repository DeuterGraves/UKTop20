import React, { Component } from 'react';
import './App.css';
import Top20Box from './Containers/Top20Box.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Music Charts</h1>
      <h2> The UK top 20</h2>
      <Top20Box />
      </div>
    );
  }
}

export default App;
