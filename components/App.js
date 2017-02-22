import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is the App Component</h1>
        <TodoInput actions={this.props.actions} />
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    )
  }

}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
