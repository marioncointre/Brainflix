import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/users/jonathan')
      .then(response => {
        this.setState({
          todos: response.data
        })
      })
  }

  addTodo = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/users/jonathan', {
      text: event.target.todoText.value,
      done: false
    })
    .then(response => {
      this.setState({
        todos: response.data
      })
    })
  }

  render() {
    const todoList = this.state.todos.map(todo => {
      return (
        <div>
          <div>{todo.done.toString()}</div>
          <div>{todo.text}</div>
        </div>
      )
    })


    return (
      <div className="App">
        <h1>Todos</h1>
        <section>
          Add Todo: 
          <form onSubmit={this.addTodo}>
            <input type="text" name="todoText"/>
            <button>Add</button>
          </form>
        </section>
        <section>
          {todoList}
        </section>
      </div>
    );
  }
}

export default App;
