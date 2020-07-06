const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  movieModel
    .find()
    .then((movies) => res.render("movies", { movies }))
    .catch((dbErr) => console.log(dbErr));
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    res.render("movie", { movie: await movieModel.findById(req.params.id) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
