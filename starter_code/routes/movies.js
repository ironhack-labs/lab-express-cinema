const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {
  Movie
    .find()
    .then(allMovies => res.render('movies', {allMovies}))
    .catch(error => console.log("An error has occured: ", error))
});

router.get('/:id', (req, res, next) => {
  console.log("-----------------------")
  Movie
    .findById(req.params.id)
    .then(movie => {
      console.log(movie)
      res.render('movie-details', movie)
    })
    .catch(error => console.log("An error has occured: ", error))
})



module.exports = router;