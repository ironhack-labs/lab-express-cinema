const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      const data = {
        moviesArr: moviesFromDB,
      };
      res.render("movies/movies-list", data);
    })
    .catch((error) => {
      console.log("Error getting list of movies from DB", error);
      next(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movieFromDB) => {
      res.render("movies/movies-details", movieFromDB);
    })
    .catch((error) => {
      console.log("Error getting details for a single movie from DB", error);
      next(error);
    });
});

router.get("/movies/:movieId/edit", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movieFromDB) => {
      res.render("movies/movie-edit", movieFromDB);
    })
    .catch((error) => {
      console.log(
        "Error getting details for a single movie from DB to render edit form",
        error
      );
      next(error);
    });
});

router.post("/movies/:movieId/edit", (req, res, next) => {
  const { title, director, description } = req.body;
  const newDetails = {
    title,
    director,
    description,
  };

  Movie.findByIdAndUpdate(req.params.movieId, newDetails, { new: true })
    .then((movieFromDB) => {
      res.redirect("/movies/" + movieFromDB._id);
    })
    .catch((error) => {
      console.log("Error updating movie details", error);
      next(error);
    });
});

router.post("/movies/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log("Error deleting movie from DB", error);
      next(error);
    });
});

module.exports = router;
