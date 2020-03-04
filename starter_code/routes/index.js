const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
let seeds = require('../bin/seeds')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET insert all the movies from seeds.js */
router.get('/insertall', (req,res,next) => {
  for(let i = 0; i < seeds.length; i++){
    let movie = new Movie;
    movie.title = seeds[i].title;
    movie.director = seeds[i].director;
    movie.stars = seeds[i].stars;
    movie.image = seeds[i].image;
    movie.description = seeds[i].description;
    movie.showtimes = seeds[i].showtimes;
    movie.save()
  }
  res.redirect('/');
});

/* GET Show all the movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log(movies);
    res.render('movies', {
      movies
    });
  })
  .catch(() => {});
});

/* GET Show the form add*/ 
router.get('/add', (req, res, next) => {
  res.render('add');
});

/* POST insert a movie*/ 
router.post('/add', (req, res, next) => {
  const movie = new Movie;
  console.log(req.body.title);
  movie.title = req.body.title;
  movie.director = req.body.director;
  movie.stars = req.body.stars;
  movie.image = req.body.image;
  movie.description = req.body.description;
  movie.showtimes = req.body.showtimes;
  movie.save();
  res.redirect('/');
});


module.exports = router;
