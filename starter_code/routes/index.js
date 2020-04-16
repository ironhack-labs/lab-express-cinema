const express = require('express');
const router  = express.Router();
const Movies = require('../models/movie')

/* GET home page */
router.get('/', (req, res) => {
  res.render(('index.hbs'), {
    layout: false,
  });
});

router.get('/movies', (req, res) => {
  Movies.find()
    .then((dbResponse) => {
      res.render(("movies.hbs"), {
        movies: dbResponse,
      })
    })
    .catch((dbErr) => {
      console.log(dbErr);
    })
});

router.get('/movies/:id', (req, res) => {
  Movies.findById(req.params.id)
    .then((dbResult) => {
      res.render(("oneMovie.hbs"), {
        movie: dbResult,
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    })
});

module.exports = router;