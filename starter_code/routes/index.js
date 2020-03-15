const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      console.log('Retrieved books from DB:', allTheMoviesFromDB);
      res.render('movies', {allTheMoviesFromDB})

    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
})


router.get('/movie/:id', (req, res, next) => {
  Movie.find({"_id": req.params.id})
    .then(movie => {
      console.log('/movie/:id', req.params.id);
      res.render('movie', movie[0])

    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
})


module.exports = router;