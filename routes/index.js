const express = require('express');
const { update } = require('../models/Movie.model');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
     Movie.find()
      .then( allTheMoviesFromDB => {
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
        res.render('movies', { movies: allTheMoviesFromDB });
      })
      .catch(error => {
        next(error);
      });
  });

  router.get('/:_id', async (req, res, next) =>  {
     Movie.findById(req.params.id)
    .then( theMovie => {
      res.render('movie/:_id', { movie: theMovie });
    })
    .catch(error => {
      next()
      console.log('Error while retrieving movie details: ', error);
    })
});



module.exports = router;
