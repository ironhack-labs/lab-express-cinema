const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((dbRes) => {
      res.render('movies.hbs', {
        movies: dbRes,
      });
    })
    .catch((dbErr) => console.log(dbErr));
});

router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((dbRes) => {
      res.render('oneMovie.hbs', {
        movie: dbRes,
      });
    })
    .catch((err) => {
      res.render('error.hbs', {
        message: err.message,
      });
    });
});

module.exports = router;
