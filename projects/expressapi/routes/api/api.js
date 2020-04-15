const express = require('express')
const router = express.Router()
const usersRouter = require('./users')
const foldersRouter = require('./folders')
const notesRouter = require('./notes')

router.use('/users', usersRouter)
router.use(require('../../config/auth'))
router.use('/folders/', checkAuth, foldersRouter)
router.use('/notes/',checkAuth, notesRouter)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
module.exports = router
