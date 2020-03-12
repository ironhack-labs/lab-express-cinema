const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
  Movie.find()
      .then(moviesFound => {
        res.render('movies', { moviesFound })
        // console.log(moviesFound);
      })
      .catch(e => {
          next(e)
      })
});

router.get('/:id', (req, res, next) => {
  console.log("trigger " + req.params.id)
  Movie.findById(req.params.id)
      .then(movie => {
          console.log(movie)
          res.render('moviedetail', movie)
      })
})

module.exports = router;