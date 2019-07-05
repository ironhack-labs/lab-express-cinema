const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => {
    console.log(movies);
      res.render('movies', { movies })
  })
  .catch();
  
});

router.get('/movies/:moviesID', (req, res, next) => {
  let id = req.params.moviesID;
  Movies.findById(id)
  .then(movies => {
    console.log(movies);
      res.render('uniqueMovie', movies)
  })
  .catch();
  
});

module.exports = router;

