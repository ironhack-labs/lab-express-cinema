const express = require('express');
const router  = express.Router();

const Movie = require('./../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(error => {
      console.log("Error getting the movies from DB : ", error);
    })
});


module.exports = router;
