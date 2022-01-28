const router = require("express").Router();

// const res = require("express/lib/response");

const Movie = require("../models/Movie.model.js");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      //   console.log(allMoviesFromDB);
      res.render("movies", { allmovies: allMoviesFromDB });
    })
    .catch((error) => {
      console.log(`Error while retrieving movies from DB ${error}`);
      next(error);
    });
});

module.exports = router;
