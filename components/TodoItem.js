import React, { Component } from 'react'

class TodoItem extends Component {

    handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id)
    }

    handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    render() {
        return (
            <li key={this.props.todo.id}>
                <label><input type="checkbox" name="checkbox" onChange={this.handleComplete.bind(this)} checked={this.props.todo.completed} />{this.props.todo.text}</label>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
            </li>
        )
    }
}

export default TodoItem