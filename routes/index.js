const express = require('express');
const router  = express.Router();


//----------- GET the model---------------
const Movie = require("../models/movie-model.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// ------------ Write the route ----------------
router.get("/movies", (req, res, next) => {
  Movie.find()
  .then((moviesResults) => {
    //res.send(moviesResults);
    res.locals.movieArray = moviesResults;
    res.render("movies.hbs")
  })
  .catch((err) => {
    next(err);
  })
})

router.get("/movies/:id", (req, res, next) => {
  let movieID = req.params.id;
  Movie.findOne({"_id": movieID})
  .then((movie) => {
    res.render("movie-detail.hbs", {movie})
  })
  .catch((err) => {
    console.log(err);
  })
})

// ------------Export the route-------------
module.exports = router;