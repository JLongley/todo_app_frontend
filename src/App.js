import React, { Component } from 'react';
import './styles/App.css'

import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TodoApp</h1>
        </header>
        <ul>
          <Todo text="this item"/>
        </ul>
      </div>
    );
  }
}

export default App;
