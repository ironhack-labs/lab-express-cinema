const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/movie/:id', (req, res, next) => {
  Movie.find({_id: req.params.id}).then((data) => {
    res.render("movie", {movie: data[0]})
  })
});

module.exports = router;
