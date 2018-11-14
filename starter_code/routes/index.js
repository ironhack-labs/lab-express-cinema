const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:indexRouter`);

/* GET home page */
router.get('/', (req, res, next) => {
  debug(process.env.DEBUG);
  let data = {
    name: "home"
  };
  res.render('index',{data});
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  debug(process.env.DEBUG);
  let data = {
    name: "movies"
  };
  Movie.find().then(movies => {
    res.render('movies',{movies, data});
    console.log(movies);
  })
});

/* GET individual movie page */
router.get('/movies/:movieId/movieInfo', (req, res, next) => {
  console.log(req.params.movieId);
  let data = {
    name: "movieInfo",
    movieId: req.params.movieId
  };
  Movie.findOne({_id: data.movieId}).then(movie => {
    res.render('movieInfo',{movie, data});
  })
});





module.exports = router;
