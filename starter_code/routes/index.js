const express = require('express');
const router = express.Router();
const Movie = require("../models/Movies")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find({})
    .then((dbResult) => {
      res.render('movies', {
        movies: dbResult
      });
    })
    .catch((err) => {
      console.log(err);
    })
});

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((dbResult) => {
      res.render('see-more', {
        Movie: dbResult
      });
    })
    .catch((err) => {
      res.render("error", {
        message: err.message
      });
    });
});

module.exports = router;
