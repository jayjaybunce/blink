const express = require('express');
const router = express.Router();
const foldersCtrl = require('../../controllers/folders')
const notesRouter = require('./notes')

/* GET users listing. */
router.get('/:id', notesRouter)
router.post('/:id', notesRouter)
router.get('/', foldersCtrl.getFoldersForUser)
router.post('/', foldersCtrl.createFolder)
router.delete('/',foldersCtrl.deleteFolder)
router.put('/', foldersCtrl.updateFolder)

module.exports = router
