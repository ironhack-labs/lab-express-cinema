const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  movies.find()
    .then(movies => {
      console.log('Movies', movies);
      res.render('movies', { movies });
    })
    .catch(err => console.log(err));
});

module.exports = router;
