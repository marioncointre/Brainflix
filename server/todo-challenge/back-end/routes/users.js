const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/TodoController')

router.route('/:username')
  .get((req, res) => {
    res.json(TodoController.getTodos(
      req.params.username, 
      req.query.done ? JSON.parse(req.query.done) : null
    ))
  })
  .post((req, res) => {
    res.json(TodoController.addTodo(
      req.params.username,
      req.body
    ))
  })

module.exports = router