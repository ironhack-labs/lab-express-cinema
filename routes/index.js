const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  // const movies = Movie.find({});
  // res.render("movies/all", { movies });

  Movie.find()
    .then((allMovies) => {
      res.render("movies/all", { name: "Silvia", movies: allMovies });
    })
    .catch((err) => res.send(err));

});

router.get('/movies/:id/detail', (req, res) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    res.render('movies/detail', {movie})
  })
  .catch((err) => res.send(err));
})



module.exports = router;
