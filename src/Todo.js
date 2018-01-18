import React, { Component } from 'react';
import './styles/Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.default
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <li className="todo">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="todo__button">✖</button>
        <button className="todo__button">☰</button>
      </li>
    );
  }
}

export default Todo;
