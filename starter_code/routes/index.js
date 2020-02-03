const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model');

// GET home page 
router.get('/', (req, res, next) => {
  res.render('index');
});


// GET home page 
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDB => {
        console.log('Movies from the DB: ', allMoviesFromDB);
        res.render('movies', { movies: allMoviesFromDB });
    })
    .catch(err => console.log(`An error has occured ${err}`));
});

module.exports = router;
