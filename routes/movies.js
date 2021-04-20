const express = require('express');
const {render} = require('../app');
const Movie = require('../models/Movie.model');


const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({})
  .then(movies => {
    res.render('movies', { movies });
  })
  .catch(error => next(error))
});


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
  .then(movie => {
    res.render('details', { movie });
  })
  .catch(error => next (error))
});



module.exports = router;
