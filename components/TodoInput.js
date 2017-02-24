import React, { Component } from 'react'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }
  
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputText.trim().length !== 0) {
        this.props.actions.addTodo(this.state.inputText);
        this.setState({
            inputText: ''
        });
    }
    document.getElementById("todoInput").focus();
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input id="todoInput"
              type="text"
              placeholder="Todo..."
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)}
            />
            <input type="submit" text="Submit" />
          </form>
      </div>
    )
  }

}

export default TodoInput
