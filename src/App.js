import React, { Component } from 'react';
import './styles/App.css'

import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TodoApp</h1>
        </header>
        <div className="container">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
