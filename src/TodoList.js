import React, { Component } from 'react';

import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        todos: ["one", "two", "three"]
      });
    }, 2000);
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo} default={todo} />
    ));
    return (
      <ul >
        {todos}
      </ul>
    );
  }
}

export default TodoList;
