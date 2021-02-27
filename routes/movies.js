const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model');

router.get("/:id([a-z0-9]{24})", (req, res, next) => {
    console.log(req.params.id);
    MovieModel.findById(req.params.id)
      .then((movie) => {
          console.log(movie);
          res.render("eachmovie", {movie})
      })
      .catch((err) => next(err))
});
// get movies page
router.get("/", (req, res, next) => {
    MovieModel.find()
    .then((movies) => res.render("movies", {
        movies: movies
    }))
    .catch((err) => res.render("error"))
});



module.exports = router;