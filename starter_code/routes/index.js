const express = require('express');
const router  = express.Router();

const Movies = require("../models/Movies.model")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/movies", (req, res) => {
  
  Movies.find()
  .then(allMovies => {
  res.render("movies", {movies : allMovies})
}
  )})


router.get("/movie/:movieIdRequested", (req, res) => {

  console.log(req.params)

  Movies.findById(req.params.movieIdRequested)
  .then(movieRequested => {

    res.render("singleMovie", movieRequested)

  })


})

module.exports = router;
