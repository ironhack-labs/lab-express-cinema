const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', {
        movies,
      });
    })
    .catch(() => {});
});

router.get('/movie/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((data) => {
      res.render('movie', { data });
    })
    .catch((err) => console.log('The error while searching albums occurred: ', err));
});

module.exports = router;
