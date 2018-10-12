const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find()
    .then(movies => {
      let info = {
        header: 'Ironhack Cinema',
        subtitle: 'Click on the movie to check the showtimes',
        movies
      }
      res.render('movies', info);
    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render ('movieDetail', {header: movie.title, movie})
    })
});

module.exports = router;
