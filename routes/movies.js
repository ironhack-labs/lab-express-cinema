const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie.model");

/* GET movies page */
router.get("/", (req, res, next) => {
  movieModel
    .find()
    .then((moviesList) => {
      // console.log(" find movies result is returned  ");
      // console.log(moviesList);
      // allMovies = moviesList.map((eachMovie) => {
      //   return { eachMovie.title , eachMovie.image}//  , eachMovie._id, eachMovie.image};
      // }  );
      res.render("movies", { allMovies: moviesList });
    })
    .catch((error) => {
      console.log(` Error while fetching movies List : ${error}`);
      closeDBConnection();
    });
});

module.exports = router;
