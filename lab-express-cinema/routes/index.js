const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie-model");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => { //request, response, next
  Movie.find() // read database
  .then((moviesFromDb) => {
    //res.send(moviesFromDb);
    res.locals.movieList = moviesFromDb;
    res.render("movies.hbs");
  })
  .catch((err) => { // promise method to handle error
    //show the error page with this error
    console.log("You have error!")
    next(err);
  });
});

router.get("/movies/:movieId", (req, res, next) => { //request, response, next
  Movie.findById(req.params.movieId) // read database
  .then((movieDetails) => {

    res.locals.movie = movieDetails;
    res.render("single-movie-page.hbs");
  })
  .catch((err) => { // promise method to handle error
    //show the error page with this error
    console.log("You have error!")
    next(err);
  });
});

module.exports = router;
