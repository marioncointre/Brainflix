const users = require('../model/data')

const UserController = {
  getUser: (username) => {
    const user = users.find((user) => (
      user.username.toLowerCase() === username.toLowerCase()
    ))
    return user
  }
}

module.exports = UserController