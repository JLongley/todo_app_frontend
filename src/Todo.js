import React, { Component } from 'react';
import './styles/Todo.css';

class Todo extends Component {
  render() {
    return (
      <li className="todo">
        <input vaule={this.props.text} />
        <button className="todo__button f6 link dim ph3 pv2 mb2 dib white">✖</button>
        <button className="todo__button">☰</button>
      </li>
    );
  }
}

export default Todo;
