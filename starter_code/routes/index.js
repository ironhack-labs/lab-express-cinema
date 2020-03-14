const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allThemoviesFromDB => {
      // console.log('Retrieved movies from DB:', allThemoviesFromDB);
      res.render('movies', { movies: allThemoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});


router.get('/movie-details/:id', (req, res, next) => {
  Movie.find({"_id": req.params.id})
    .then(movie => {
      // console.log('Retrieved movies from DB:', allThemoviesFromDB);
      res.render('movie-details', movie[0]);
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});
