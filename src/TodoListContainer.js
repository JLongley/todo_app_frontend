import React, { Component } from 'react';
import TodoList from "./TodoList";


class TodoListContainer extends Component {

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

  update(todo) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/todos/${todo._id}`, {
      method: 'PUT',
      body: JSON.stringify(todo), 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
    });
  }

  add(value) {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/todos/`, {
      method: 'POST',
      body: JSON.stringify({
        value: value,
        done: false
      }), 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      this.state.todos.push(response);
      this.setState({todos: this.state.todos});
    });
  }
 
  remove(_id) {
    const newTodos = this.state.todos.filter((todo) => todo._id !== _id);
    this.setState({ todos: newTodos })


    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/todos/${_id}`, {
      method: 'DELETE',
    })
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(`Success: TODO ${_id} deleted.`)
      const newTodos = this.state.todos.filter((todo) => todo._id !== _id);
      this.setState({ todos: newTodos })
    });
  }

  render() {
    return <TodoList todos={this.state.todos} update={this.update} add={this.add} remove={this.remove} />
  }
}

export default TodoListContainer;
