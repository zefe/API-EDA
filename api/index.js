
const express = require('express')
const cors = require('cors')
const apiRouter = express.Router()
const usersRouter = require('./users')

apiRouter.use(cors())

apiRouter.all('/', function (req, res) {
  res.json({ name: 'EDA', version: 1.0 })
})

apiRouter.use('/users', usersRouter)
module.exports = apiRouter