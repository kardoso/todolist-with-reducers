function List(props) {
  return (
    <ul>
      <li>List</li>
    </ul>
  )
}

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value
    this.input.value = ''

    this.props.store.dispatch(
      addTodoAction({
        name,
        complete: false,
        id: generateId(),
      })
    )
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
        <List />
      </div>
    )
  }
}

class Goals extends React.Component {
  render() {
    return (
      <div>
        GOALS
        <List />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Todos store={this.props.store} />
        <Goals />
      </div>
    )
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('app'))
