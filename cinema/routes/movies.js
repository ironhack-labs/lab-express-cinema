const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find()
    .then(movies => {      
      res.render('movies', { movies });
    })
    .catch(error => {
      next(error);
    })    
  });

router.get('/movie/:id', (req,res,next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('movie', movie);
    })
    .catch(error => {
      next(error);
    })
})

module.exports = router;
