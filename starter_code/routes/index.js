const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
let seeds = require('../bin/seeds');

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
  movie.title = req.body.title;
  movie.director = req.body.director;
  movie.stars = req.body.stars;
  movie.image = req.body.image;
  movie.description = req.body.description;
  movie.showtimes = req.body.showtimes;
  movie.save();
  res.redirect('/');
});

router.get('/add', (req, res, next) => {
  res.render('add');
});

router.get('/movie/:id', function(req, res, next) {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('movie', { movie });
    })
    .catch(error => {
      next(error);
    })
})

router.post('/delete/:id', function(req, res) {
  Movie.findByIdAndDelete(req.params.id, req.body)
    .then(() => {
      return res.redirect('../');
    })
    .catch(error => {
      next(error);
    })
});

router.get('/update/:id', function(req, res, next) {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('update', { movie });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/update/:id', function(req, res, next) {
  const { id } = req.params;
  const { title, director, stars, image, description, showtimes } = req.body;
  Movie.findByIdAndUpdate(id , {
    title, director, stars, image, description, showtimes
  })
  .then(resortUpdates => {
    res.redirect('/');
  })
  .catch(next);
});



module.exports = router;
