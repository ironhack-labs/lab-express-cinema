const Movie = require("../models/Movie.model")
const router = require("express").Router();


router.get("/movies", (req, res, next) => {
    Movie.find()
      .then((moviesArr) => {
  
          res.render("movies", {movies: moviesArr})
      })
      .catch(err => {
          console.log("error getting movies from DB", err)
          next(err);
      })
  });


module.exports = router;