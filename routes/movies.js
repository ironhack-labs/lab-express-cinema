const express = require('express');
const Movie = require('../models/movie')
const router = express.Router();

/* GET movies listing. */
router.get('/', function (req, res, next) {
  Movie.find({})
    .then((movies) => {
      //console.log(movies)
      res.render('movies/list', {movies})
    })
    .catch((error) => {
      next(error)
    })
  })
  
  router.get('/:id/detail', function (req, res, next){
    id=req.params.id
    //console.log(id)
    Movie.findById(id)
      .then((movie) => {
        //console.log(movie)
        res.render('movies/detail', movie)
      })
      .catch((error) => {
        next(error)
      })
})

module.exports = router