const express = require('express');

const Movies = require('../models/Movie');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movies.find()
    .then((movies) => {
      console.log(movies[0]);
      res.render('movies', { movies });
    })
    .catch((error) => {
      console.log(error);
      throw new Error();
    });
});

module.exports = router;
