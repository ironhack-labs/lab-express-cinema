const express = require('express');
const router  = express.Router();
//
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/movies', (req, res, next) => {
  Movie.find({})
  .then((movies)=>{
    //res.json(movies);
    res.render('movies', {movies});
  })
  .catch((err)=>{
    console.log(err);
  })

  router.get('/movie/:movieId', (req, res, next) => {
    var id = req.params.movieId;
    console.log(id);
    Movie.findById(id)
    .then((movie)=>{
      //res.json(movie);
      res.render('movie', movie);
    })
    .catch((err)=>{
      console.log(err);
    })
  });
  
});

module.exports = router;
