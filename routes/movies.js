const express = require("express");
const { render } = require("../app");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      console.log(allMovies);
      res.render("movies", { allMovies });
    })
    .catch((error) => console.log(error));
});

// router.get("/:movieId", (req, res) => {
//   const movieId = req.params;
//   console.log(movieId);

//   Movie.findById(movieId).then((thisMovie) => {
//     console.log(thisMovie);
//     res.render("this-movie", { thisMovie });
//   });
// });
module.exports = router;
