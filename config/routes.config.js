const express = require('express')
const router = express.Router()

const common = require('../controllers/common.controller')
const movie = require('../controllers/movie.controller')

router.get('/', common.home)

router.get('/movies', movie.list)
router.get('/movies/:id', movie.detail)

module.exports = router