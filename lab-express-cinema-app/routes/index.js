const express = require('express');
const Movie = require('../models/movie-model.js');

const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((movieRes)=>{
      //res.send(movieRes)
      res.locals.movieArray = movieRes;
      res.render("movies.hbs")
    })
    .catch((err)=>{
      next(err);
    });
})

router.get('/movies/:_id', (req, res, next)=>{
  Movie.findById(req.params._id)
  .then((oneMovieRes)=>{
    //res.send(oneMovieRes)
    res.locals.oneMovie = oneMovieRes;
    res.render("movies-info.hbs")
  })
  .catch((err)=>{
    next(err);
  });
})

module.exports = router;
