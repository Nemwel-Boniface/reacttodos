import React, {Component} from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    })
  }
  
  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Add Todo..."
          className="input-text" 
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
          />
        <input type="submit" value="Submit" className="input-submit" />  
      </form>
    )
  };
}

export default AddTodo;