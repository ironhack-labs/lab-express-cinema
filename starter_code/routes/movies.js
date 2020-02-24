const express = require("express");
const router = express.Router();
const Film = require("../models/Movie");

router.get("/", (req, res, next) => {
  Film.find()
    .then(allFilm => {
      res.render("movies", {
        movie: allFilm
      });
    })
    .catch(err => console.log(err));
});

router.get("/details/:id", (req, res, next) => {
  const filmId = req.params.id;
  Film.findById(filmId)
    .then(theFilm => {
      res.render("details", theFilm);
    })
    .catch(err => console.log(err));
});

module.exports = router;
