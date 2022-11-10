const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {

  Movie
    .find()
    .then(MoviesFromDB => {
      res.render('movies', { movies: MoviesFromDB })
    })
    .catch(err => console.log(err))

}),

  router.get('/details/movD/:movie_id', (req, res, next) => {

    const { movie_id } = req.params

    Movie
      .findById(movie_id)
      .then(movieFromDB => {
        res.render('details/movD', movieFromDB)
      })
      .catch(err => console.log(err))

  }),
  module.exports = router;
