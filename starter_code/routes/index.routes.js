const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(allMovies => res.render('movies', {movies:allMovies}))
  .catch(err => console.log("Error consultadno las pelis en la BBDD: ", err))
});

router.get('/movies/:id',(req,res) => {
  let movieId= req.params.id
  Movie.findById(movieId)
  .then(theMovie => res.render('seeMore',theMovie))
  .catch(err => console.log("Error consultadno la peli por id en la BBDD: ", err))
})

module.exports = router;
