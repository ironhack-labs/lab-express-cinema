const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie
    .find()
    .then(data => {
      // console.log(data)
      res.render('movies', {
        data
      })
    })
    .catch((err) => {
      console.log(err)
    });
});

router.get('/movie/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(data => {
      console.log(data)
      res.render('movie', data)
    })
    .catch((err) => {
      console.log(err)
    });
});

module.exports = router;
