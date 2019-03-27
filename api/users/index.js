const express = require('express')
const usersRouter = express.Router()
const listUsers = require('./list')


usersRouter.get('/', listUsers)

module.exports = usersRouter;