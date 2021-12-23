const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next)=> {
    Movie.find()
        .then((results) => {
            console.log("These are the results", results);
            res.render("movies", {movies: results});
        })
        .catch((err) => {
            console.log('Something went wrong', err);
          });
});

router.get("/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((results) => {
        console.log("These are the results", results);
        res.render("movies", results);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  });

module.exports = router;