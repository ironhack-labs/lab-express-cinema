const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET movies listing. */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', { movies });
  }) 
  .catch(error => {
    console.log(error);
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
  .then(movie => {
    res.render('movie-details', { movie: movie });
  }) 
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;
