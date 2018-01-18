import React, { Component } from 'react';

import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        todos: [{
          id: 123,
          value: "one two three", 
          done: false
        },
        {
          id: 122,
          value: "one two three", 
          done: false
        }]
      });
    }, 200);
  }

  handleChange(component) {

  }

  delete(id) {
    const remainder = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: remainder
    })
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo.id} todo={todo} handleChange={this.handleChange} delete={this.delete}/>
    ));
    return (
      <ul >
        {todos}
      </ul>
    );
  }
}

export default TodoList;
