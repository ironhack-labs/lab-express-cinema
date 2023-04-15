const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((allMoviesFromDB) => {
      const movies = allMoviesFromDB.map((movie) => ({
        id: movie._id,
        title: movie.title,
        image_url: movie.image,
      }));
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB", error);
      next(error);
    });
});

/* get movie detail */

router.get('/movies/:movieId', (req, res, next) => {
  const { movieId } = req.params;

  Movies.findById(movieId)
    .then(theMovie => res.render("movie", { movie: theMovie }))

    .catch(error => {
      console.log('Error while retrieving book details: ', error);
      next(error);
    });
});

module.exports = router;
