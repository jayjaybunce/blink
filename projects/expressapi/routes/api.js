const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.json({
        username: 'jayjaybunce',
        password: 'somepassword',
    })
})

module.exports = router
