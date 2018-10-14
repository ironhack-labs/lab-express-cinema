const express = require('express');
const Movie = require('../models/movie.js');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find()
  .then(movies =>{
    res.render('movies', {movies});
  })
  .catch(error =>{
    console.log('upsi: ', error)
  }) 
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
  .then(movie => {
    res.render('movie', { movie: movie });
  }) 
  .catch(error => {
    console.log(error);
  })
});


module.exports = router;
