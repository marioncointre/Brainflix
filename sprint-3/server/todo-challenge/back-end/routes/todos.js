const express = require('express')
const todosRouter = express.Router()
const TodoController = require('../controllers/TodoController')

todosRouter.get('/', (req, res) => {
  res.json(TodoController.getTodos(
    req.query.username, 
    req.query.done ? JSON.parse(req.query.done) : null
  ))
})

module.exports = todosRouter