const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

/* GET movies listing. */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/movies', { movies });
  })
  .catch(error => {
    next(error);
  })
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('movies/detail', movie);
    })
    .catch(error => {
      next(error);
    })
})



module.exports = router;
