import React, { Component } from 'react';
import { debounce } from 'lodash';

import './styles/Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.todo

    this.handleChange = this.handleChange.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
    this.update = debounce(this.props.update, 250)
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value }, () => {
      this.update(this.state)
    })
  }

  toggleDone() {
    this.setState({done: !this.state.done}, () => {
      this.update(this.state)
    })
  }

  render() {
    return (
      <li className="todo">
        <button className="todo__button" onClick={this.toggleDone}>
          ✓
        </button>
        <input className={this.state.done ? "todo--done" : ""} type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="todo__button" onClick={() => {this.props.remove(this.state._id)}}>✖</button>
      </li>
    );
  }
}

export default Todo;
