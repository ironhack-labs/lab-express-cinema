const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviedb) => {
      res.render("movies", { movies: moviedb });
    })
    .catch((err) => console.log(err));
});

router.get('/movie/:id', (req, res, next) => {
    const movieId = req.params.id
    Movie.findOne({_id: movieId})
        .then(indivMovie => {
            res.render('moviedetails', {movie: indivMovie})
        })
        .catch(err => console.log(err))
})

module.exports = router;
