const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render('movies', { movies: movies })
        console.log("movies were created")
      })
      .catch((e) => next(e));
  });

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movieDetails", movie);
    })
    .catch((e) => next(e));
})

module.exports = router;
