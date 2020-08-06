const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const DB_NAME = 'library-project';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/* GET single movie page */
router.get('/movies/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;
    // console.log(req.params);
    // Movie.findOne({ _id: movieId })
    // .then(theMovie => res.render('movie-details', theMovie))
    // .catch(error => console.log('Error while getting all movies from DB ', error));

    Movie.findById(movieId)
    .then(theMovie => res.render('movie-details', theMovie))
    .catch(error => console.log('Error while getting all movies from DB ', error));

});

/* GET movies page */
router.get('/movies', (req, res, next) => {
    // console.log("Here");
    Movie.find()
    .then(allMoviesFromDB => res.render('movies', {movies: allMoviesFromDB}))
    .catch(error => console.log('Error while getting all movies from DB ', error));
   
});

module.exports = router;
