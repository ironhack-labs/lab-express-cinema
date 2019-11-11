const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(documents => {
      console.log(documents);
      res.render('movies.hbs', {
        movies: documents
      });
    })
    .catch(err => {
      console.log(err);
    });
});


router.get('/movie/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render('movieDetails.hbs', {
        movie: movie
      })
    })
    .catch(err => {
      console.log(err);
    })
})



module.exports = router;