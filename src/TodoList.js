import React from 'react';

import "./styles/TodoList.css"

import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = (props, context) => {
  const todos = props.todos.map((todo) => (
    <Todo key={todo._id} todo={todo} update={props.update} remove={props.remove}/>
  ));
  return (
    <div>
      <TodoForm className="todo-list__form" add={props.add}/>
      <ul className="todo-list">
        {todos}
      </ul>
    </div>
  ); 
}

export default TodoList;
