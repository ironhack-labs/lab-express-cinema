const express = require('express');
const Movie = require('../models/movie-model');
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(( moviesFromDb) => {
   /* res.send("moviesFromDb")*/
  //  res.locals.movieList = moviesFromDb;
    res.render('movie-page', {movieList: moviesFromDb });
  }  
  )
  .catch(err => {
     next(err);
  }
  );
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then( movieDetails => {
      res.render('single-movie-page', {movie : movieDetails});
    })
    .catch();
});

module.exports = router;

