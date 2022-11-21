import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#c5e2d2",
      textDecoration: "line-through"
    };

    const {id, title, completed} = this.props.todo;

    return (
      <li className='todo-item'>
        <input type="checkbox" checked={completed} 
         onChange={() => this.props.handleChange(id)}
        />
        <span style={completed? completedStyle : null}>
          {title}
        </span>

        <button className='btn-style' type='button' 
        onClick={() => this.props.handleDelete(id)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem;