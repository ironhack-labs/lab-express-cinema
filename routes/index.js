const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
Movie.find()
.then(moviesFromDB => {
    console.log(`Reading the movies:`, moviesFromDB);
    res.render('movies.hbs', { movies: moviesFromDB });
})
.catch(error => {
    console.log('Error getting the movies from DB: ', error);
    next(error);
});
});


module.exports = router;
