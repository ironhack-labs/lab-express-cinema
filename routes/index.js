const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
console.log ("home works")

module.exports = router;

//List movies
router.get("/movies", (req, res, next) => {

    Movie.find() //get all movies
    .then ( (moviesArr) => {
        console.log(moviesArr);
        res.render("movies", {movies: moviesArr})
    })
    .catch((err) => {
      console.log("error getting movies from DB", err)
      next(err);  
    });
});

//Display movie details
router.get("/movies/:movieId", (req, res, next) => {
    const id = req.params.movieId;

    Movie.findById(id)  //query to the database returns an object
        .then((movieDetails) => {
            console.log(movieDetails)
            res.render("movie-details", movieDetails);
        })
        .catch(err => {
            console.log("error getting movie details from DB", err)
            next(err);
        });
})
