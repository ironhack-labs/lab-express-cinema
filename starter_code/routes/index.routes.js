const express = require('express');
const router = express.Router();
const Movie = require("../models/movie.model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {

  Movie.find()
    .then(movies => res.render("movies", {
      movies
    }))
    .catch(err => console.log("Ha surgido un error: ", err))

})

router.get("/see/:id", (req, res) => {
  console.log(req.params.id)
  Movie.findById(req.params.id)
    .then(movie => res.render("see", movie))
    .catch(err => console.log("Ups, se ha producido un error: ", err))
})

module.exports = router;