const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {
  Movie.find()
    .then((allMovies) => {
      console.log(allMovies);
      res.render('movies-pages/movies', { movies: allMovies });
    })
    .catch((err) => console.log(err));
});

router.get('/movie/:id', (req, res, next) => {
  console.log(req.params.id);
  const { id } = req.params;
  console.log(id);

  Movie.findById(id)
    .then((TheMovie) => {
      res.render('movies-pages/movie', { Movie: TheMovie });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
