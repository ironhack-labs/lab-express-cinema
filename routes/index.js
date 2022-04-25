const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// route for display all movies
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then( moviesArr => {
            console.log(moviesArr);
            res.render('movies', {movies: moviesArr})
        })
        .catch(err => {
            console.log("error displaying movies", err);
        }) 
});

// READ: display movie details
router.get("/movies/:movieId", (req, res, next) => {
    const id = req.params.movieId;

    Movie.findById(id)
        .then((movieDetails) => {
            console.log(movieDetails);
            res.render("movie-details", movieDetails);
        })
        .catch(err => {
            console.log("error getting movie details from DB", err)
            next(err);
        });
})




module.exports = router;
