const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movies.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next) => {
  Movie.find()
  .then(moviesResults => {
    res.locals.movieArray = moviesResults;
    res.render("movies.hbs");
  })
  .catch(err => next(err));
});

router.get('/movie/:id',(req,res,next) => { 
  //  res.send(req.params);
  const {id} = req.params;
  Movie.findById(id)
  .then(movieDoc => {
    res.locals.movieItem = movieDoc;
   res.render("movie-details.hbs");
  })
  .catch(err => next(err));
});


module.exports = router;
