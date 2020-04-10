const express = require('express')
const router = express.Router()
const usersRouter = require('./users')
const foldersRouter = require('./folders')

router.use('/users', usersRouter)
router.use('/folders/', foldersRouter)

module.exports = router
