const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (_, res) => res.render('index'));

router.get('/movies', (_, res) => {
  Movie.find({})
  .then(allMovies => res.render('movies', { movie: allMovies }))
  .catch(err => console.log(err))
});

router.get('/movies/:id', (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
  .then(theMovie => res.render('movie-detail', { theMovie }))
  .catch(err => console.log(err));
});


module.exports = router;
