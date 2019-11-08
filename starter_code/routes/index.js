const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET Movies page

router.get('/movies', (req, res, next) => {
  Movie
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.render('movies', {
        movies: dbRes
      });
    })
    .catch(err => {
      console.log(err)
    });
});

// GET Specific movie page regarding the id

router.get("/movie/:id", (req, res) => {
  Movie
    .findOne({
      _id: req.params.id
    })
    .then(dbRes => {
      console.log(dbRes);
      res.render('movie', {
        movie: dbRes
      });
    });
});

module.exports = router;