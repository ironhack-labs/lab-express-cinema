const express = require('express');
const router = express.Router();
const movie = require('../models/movie')

/* GET movies listing. */
router.get('/', (req, res, next) => {
  movie.find()
  .then(movies => {
    res.render('movies', { movies });
  }) 
  .catch(error => {
    console.log(error);
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  movies.findById(id)
  .then(movie => {
    res.render('movie-details', { movie: movie });
  }) 
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;
