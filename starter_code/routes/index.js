const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((dbResult) => {
      res.render("movies.hbs", {
        movies: dbResult,
      });
    })
  .catch((err)=>console.log(err))
});

router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((dbResult) => {
      res.render("oneMovie.hbs", {
        movie: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message
      });
    });
});

module.exports = router;
