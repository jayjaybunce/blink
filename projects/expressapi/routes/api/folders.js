const express = require('express');
const router = express.Router();
const foldersCtrl = require('../../controllers/folders')


/* GET users listing. */
router.get('/', foldersCtrl.getFoldersForUser)

module.exports = router
