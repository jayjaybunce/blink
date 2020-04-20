const express = require('express')
const router = express.Router()
const issuesCtrl = require('../controllers/issues')

router.get('/', issuesCtrl.index)
router.post('/',issuesCtrl.newIssue)


module.exports = router;