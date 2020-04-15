const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/notes')

router.post('/:id', notesCtrl.createNote)
router.get('/:id', notesCtrl.getNotesForFolder)

module.exports = router;