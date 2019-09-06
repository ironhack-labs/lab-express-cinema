const express = require('express')
const router = express.Router()
const { indexView, moviesList, movieSingle } = require('../controllers/index.controller')

router.get('/', indexView)
router.get('/movies', moviesList)
router.get('/movie/:id', movieSingle)

module.exports = router
