const express = require('express')
const app = express()
const cors = require('cors')
const todosRouter = require('./routes/todos')
const userRouter = require('./routes/users')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  console.log(new Date() + ' ' + req.path)
  next()
})

app.use('/todos', todosRouter)
app.use('/users', userRouter)

app.listen(8080, () => {
  console.log('Listening...')
})