const express = require('express');
const router = express.Router();
const foldersCtrl = require('../../controllers/folders')


/* GET users listing. */
router.get('/', foldersCtrl.getFoldersForUser)
router.post('/', foldersCtrl.createFolder)
router.delete('/',foldersCtrl.deleteFolder)


module.exports = router
