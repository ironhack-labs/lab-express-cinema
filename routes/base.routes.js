const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/movies', (req, res) => res.render('movies'))


module.exports = router
