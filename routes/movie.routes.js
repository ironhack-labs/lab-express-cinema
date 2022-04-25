const Movie = require("../models/Movie.model");

const router = require("express").Router();

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      console.log(moviesArr);
      res.render("movies", { moviesArr });
    })
    .catch((err) => {
      console.log("error getting Movies from DB", err);
      next(err);
    });
});

router.get("/details-movies/:moviesId", (req, res, next) => {
  const id = req.params.moviesId;

  Movie.findById(id)
    .then((MovieDetails) => {
        console.log(id);
      res.render("details-movies", MovieDetails);
    })
    .catch((err) => {
      console.log("error getting book details from DB", err);
      next(err);
    });
});

module.exports = router;
