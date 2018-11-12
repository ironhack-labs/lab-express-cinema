const express = require('express');
const router  = express.Router();
const Movie = require('../model/Movie').Movie;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie
    .find({}, 'title image')
    .then(movies => {
      res.render('movies', {movies});
    })
    .catch(err => {

    });


});

module.exports = router;
