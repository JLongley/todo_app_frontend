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
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/todos/`)
      .then(response => response.json())
      .then(todos => {
        this.setState({
          todos: todos
        })
      })
  }

  handleChange(component) {

  }

  add(value) {
    this.state.todos.push({
      _id: Math.random(),
      value: value,
      done: false
    });

    this.setState({todos: this.state.todos});
  }
 
  remove(_id) {
    const newTodos = this.state.todos.filter((todo) => todo._id !== _id);
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo._id} todo={todo} handleChange={this.handleChange} remove={this.remove}/>
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
