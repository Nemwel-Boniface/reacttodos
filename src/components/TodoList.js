import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
          // <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    )
  }
}

export default TodoList;