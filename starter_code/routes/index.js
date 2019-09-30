const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.js')
// const MovieSeeds = require('../bin/seeds.js')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(data => {
      // console.log('Retrieved movies from DB:', data);
      res.render('movies', {data});
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

router.get('/movies/:_id', (req, res, next) => {
  const movieId = req.params._id;

  Movie.findById(movieId)
  .then(data => {
    // console.log('Retrieved movies from DB:', data);
    res.render('movie-details',data);
  })
  .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
  })
});

module.exports = router;