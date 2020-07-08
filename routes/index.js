const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');  

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find({})
      .then(moviesFromDB => {
        res.render('movies-list', { moviesFromDB});
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
      })
  });

  router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movie => {
        res.render('movie-detail', { movie });
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });

module.exports = router;
