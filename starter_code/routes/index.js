const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log(
    "request is always coming here because the route has been defined before"
  );
  res.render("index", { title: "Ironhack Cinema" });
});

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then(alltheMoviesFromDB => {
      // console.log("Retrieved movies from DB:", alltheMoviesFromDB);
      res.render("movies.hbs", {
        movies: alltheMoviesFromDB,
        title: "Ironhack Movies"
      });
    })
    .catch(error => {
      console.log("error while getting movies from the DB: ", error);
    });
});

router.get("/movie/:id", (req, res) => {
  console.log("here-------------");

  console.log(req.params.id);
  const id = req.params.id;
  MovieModel.findById(id)
    .then(clickedMovie => {
      console.log(clickedMovie);
      res.render("movie.hbs", clickedMovie);
    })
    .catch(err => {
      console.log("error", err, " occured");
    });
});

module.exports = router;
