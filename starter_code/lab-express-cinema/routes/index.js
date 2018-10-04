const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {header: 'Cinema Ironhack'});
});

router.get('/movies', (req, res, next) => {
  Movie.find()
      .then(movies => {
          res.render('movies', {
            header: 'Ironhack Cinema',
              description: 'Click on the movie to check the showtimes!',
              movies})
      });
});

router.get('/movie/:id', (req, res, next) => {
   Movie.findById(req.params.id)
       .then(movie => {
           res.render('movieDetail', {'header':movie.title, movie})
       });
});

module.exports = router;
