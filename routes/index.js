const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
console.log ("home works")

module.exports = router;

//READ
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