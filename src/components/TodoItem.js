import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
     <React.Fragment>
        <li>< input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />{this.props.todo.title}</li>,
      <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
     </React.Fragment>
    )
  }
}

export default TodoItem;