const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});





router.get('/movies', (req, res, next) => {

  Movie.find().then(movie => {
    console.log(movie)
    res.render("movies.hbs", {
      moviesList: movie
    })
  })

  //res.render('movies');
});


router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId

  Movie.findById(movieId).then(movie => {

    res.render("movie.hbs", {
      movie: movie
    })
  })
})




module.exports = router;