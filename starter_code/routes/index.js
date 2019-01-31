const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(data => {
      console.log(data)
      res.render("movies", {
        movies: data
      });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movieinfo/:id', (req, res, next) => {
  Movie.findOne({"_id": req.params.id})
    .then(data => {
      res.render("movieinfo", {
        movie: data
      });
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
