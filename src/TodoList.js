import React, { Component } from 'react';

import "./styles/TodoList.css"

import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
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

  add(value) {
    this.state.todos.push({
      id: Math.random(),
      value: value,
      done: false
    });

    this.setState({todos: this.state.todos});
  }

  remove(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo.id} todo={todo} handleChange={this.handleChange} remove={this.remove}/>
    ));
    return (
      <div>
        <TodoForm className="todo-list__form" add={this.add}/>
        <ul className="todo-list">
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;
