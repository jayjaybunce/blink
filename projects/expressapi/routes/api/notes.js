const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/notes')

router.post('/:id', notesCtrl.createNote)
router.get('/:id', notesCtrl.getNotesForFolder)
router.put('/:id',notesCtrl.updateNote)
router.delete('/:id/:nId', notesCtrl.deleteNote)
module.exports = router;