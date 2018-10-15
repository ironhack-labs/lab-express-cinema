const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find()
  .then(result => {
    const movies = result
    res.render('movies', {movies})
  })
  .catch(error => {
    next(error)
  });
})

router.get('/:id', (req, res, next) => {
  const _id = req.params.id ;
  Movie.find({_id})
  .then(result => {
    const movies = result
    res.render('movie',{movies})
  })
  .catch(error => {
    next(error)
  })
})

module.exports = router;
