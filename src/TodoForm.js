import React, { Component } from 'react';
import './styles/Todo.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(ev) {
    this.setState({value: ev.target.value});
  }

  handleKeyPress(ev) {
    if(ev.key === "Enter")
      this.props.add(this.state.value);
  }

  render() {
    return (
      <div className={this.props.className}>
        <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <button className="todo__button" onClick={() => {this.props.add(this.state.value)}}>Submit</button>
      </div>
    );
  }
}

export default TodoForm; 
