import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import { handleAdd, handleDelete, handleToggle } from '../actions/todos'

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()

    this.props.dispatch(
      handleAdd(this.input.value, () => (this.input.value = ''))
    )
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDelete(todo))
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggle(id))
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos)
