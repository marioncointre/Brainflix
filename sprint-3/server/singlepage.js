const express = require("express");
const app = express();

const users = [
  {
    username: "Jonathan",
    todos: [
      {
        text: "clean your room",
        done: false
      },
      {
        text: "go to dentist",
        done: false
      }
    ]
  },
  {
    username: "Jonathan",
    todos: [
      {
        text: "clean your room",
        done: false
      },
      {
        text: "go to dentist",
        done: false
      }
    ]
  }
];

app.get("/todos", (req, res) => {
  const user = uses.find(user => {
    user.username.toLowerCase() === req.query.username.toLowerCase();
  });

  let todos = user.todos;
  if (req.query.done) {
    todos = user.todos.filter(todo => {
      return todo.done === JSON.parse(req.query.done.toLowerCase());
    });
  }
  res.json(todos);
});

app.get("/users/:username", (req, res) => {
  const user = users.find(
    user => user.username.toLowerCase() === req.params.username.toLowerCase()
  );

  let todos = user.todos;
  if (req.query.done) {
    todos = user.todos.filter(todo => {
      return todo.done === JSON.parse(req.query.done.toLowerCase());
    });
  }
  res.json(todos);
});

app.listen(8080, () => {
  console.log("listening...");
});
