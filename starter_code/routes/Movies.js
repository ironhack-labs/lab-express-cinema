const express = require("express");
const router = express.Router();

const movieModel = require("../Models/Movie");

router.get("/movies", (req, res) => {
  console.log("ici");
  movieModel
    .find()
    .then(dbRes => {
      res.render("movies", { movies: dbRes });
    })
    .catch(err => console.error(err));
});

router.get("/movies/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("movie", { movie: dbRes });
    })
    .catch(err => console.error(err));
});

module.exports = router;
