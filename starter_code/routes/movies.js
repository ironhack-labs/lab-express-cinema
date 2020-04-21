const express = require("express");
const router = express.Router();
const Movie = require("../models/movies");

/* GET /movies */
router.get("/movies", (req, res, next) => {
  //get all the movies here
  Movie.find().then((dataFromDB) => {
    console.log("data from database:", dataFromDB);
    //res.send(dataFromDB);
    res.render("movies", { movieList: dataFromDB });
  });
});

module.exports = router;

//route to display movie info
router.get("/movies/:id", (req, res) => {
  console.log(req.params);
  const movieID = req.params.id;
  Movie.findById(movieID).then((movie) => {
    //res.send(movie);
    console.log("movie stars", movie.stars);
    res.render("movie-info", { movieObject: movie });
  });
});
