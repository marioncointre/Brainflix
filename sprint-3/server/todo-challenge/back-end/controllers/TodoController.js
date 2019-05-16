const UserController = require('./UserController')

const TodoController = {
  getTodos: (username, done) => {
    const user = UserController.getUser(username)
    let todos = user.todos
    if(done) {
      todos = user.todos.filter(todo => {
        return todo.done === done
      })
    }
    return todos
  },
  addTodo: (username, todo) => {
    const user = UserController.getUser(username)
    user.todos.push(todo)
    return user.todos
  }
}

module.exports = TodoController