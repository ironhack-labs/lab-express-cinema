const express = require("express");
const router = express.Router();
const moviesModel = require("./../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  moviesModel
    .find()
    .then(dbRes => {
      res.render("movies", { movies: dbRes });
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/movies/:id", (req, res) => {
  moviesModel.findOne({ _id: req.params.id }).then(dbRes => {
    res.render("movie-details", { movie: dbRes });
  });
});

module.exports = router;
