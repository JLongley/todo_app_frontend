import React, { Component } from 'react';
import './styles/Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.todo;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <li className="todo">
        <button className="todo__button" onClick={() => { 
          this.setState({done: !this.state.done})
        }}>
          Done
        </button>
        <input className={this.state.done ? "todo--done" : ""} type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="todo__button" onClick={() => {this.props.delete(this.state.id)}}>✖</button>
        <button className="todo__button">☰</button>
      </li>
    );
  }
}

export default Todo;
