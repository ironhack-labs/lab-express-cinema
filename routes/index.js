const express = require('express')
const router = express.Router()

const Movies = require('./../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {
  Movies.find()
    .sort({ title: 1 })
    .then((movies) => res.render('movies', { movies }))
    .catch((error) => console.log(error))
})

router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params
  Movies.findById(id).then((movie) => {
    res.render('movie-page', movie)
  })
})

module.exports = router
