const express = require("express");
const router = express.Router();
const Ironcinema = require("./../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("Routing to index");
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Ironcinema.find()
    .then((allMovies) => {
      const data = {
        allMovies: allMovies,
      };
      console.log("movies", data);
      res.render("movies", data);
    })
    .catch((err) => next(err));
});

router.get("/movies/:id/get", (req, res, next) => {
  Ironcinema.findById(req.params.id)
    .then((movie) => {
      console.log("movie: ", movie);
      res.render("movies-details", movie);
    })
    .catch((err) => next(err));
});

module.exports = router;
