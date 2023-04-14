const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", async (req, res) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((allMovies) => {
      console.log("All movies in DB: ", allMovies);
      res.render("movies.hbs");
    })
    .catch((error) => {
      console.log("The error was: ", error);

      next(error);
    });
});

// router.get("/movies/:movieId", async (req, res) => {
//   const movie = await Movie.findById(req.params.movieId);
//   res.render("movies/movie-detail", { movie });

router.get('movies/:movieId', (req, res) => {
    const { movieId } = req.params;
    res.render('movies/movie-detail.hbs');
})

module.exports = router;
