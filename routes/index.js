const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");
const bodyParser = require("body-parser");

/* app.use(bodyParser.urlencoded({ extended: true }));
 */
/* GET home page */

router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movies.find();
    res.render("movies", { movies });
  } catch (error) {
    console.log(error);
  }
});

router.get("/addmovies", (req, res) => {
  res.render("addmovies");
});

router.post("/addmovies", (req, res) => {
  const { movieName, movieImage } = req.body;
  const newMovie = {
    title: movieName,
    image: movieImage,
  };
  Movies.create(newMovie)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => console.log("error"));
});

router.get("/movie/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;

    const movie = await Movies.findById(movieId);

    res.render("movie-detail", movie);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
