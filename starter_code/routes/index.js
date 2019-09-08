const express = require('express')
const { viewMovies, viewMovie } = require('./../controllers/index.controllers')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

// Go to the movies
router.get('/movies', viewMovies)

router.get('/movie/:id', viewMovie)

module.exports = router
