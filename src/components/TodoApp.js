import React from 'react';
import Todos from './Todos';
import Header from './Layout/Header';
import AddTodo from './AddTodo';
import axios from 'axios';

class TodoApp extends React.Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Setup the development environment",
      //   completed: true
      // },
      // {
      //   id: 2,
      //   title: "Develop website and add content",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: "Deploy to live server",
      //   completed: false
      // }
    ]
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter( todo => {
          return todo.id !== id;
        })
        
      ]
    })
  }

  addTodo = title => {
    this.setState({
      todos: [...this.state.todos, {
        id: Math.floor((Math.random() * 100) + 1),
        title,
        completed: false
      }]
    })
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 10
      }
    })
    .then(response => console.log(response.data));
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className='container'>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} 
         handleChange={this.handleChange}
         handleDelete={this.handleDelete}
        />
      </div>
    )
  }
};

export default TodoApp;