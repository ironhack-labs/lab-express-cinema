const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
 Movie.find()
  .then(moviesFromDB => {
    console.log('Movies from DB: ', moviesFromDB);
    res.render('movies', {moviesFromDB});
  })
  .catch(err => console.log('The error while getting movies:', err));
});



router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
   .then(m => {
     console.log('Movie info from DB: ', m);
     res.render('movie', {m});
   })
   .catch(err => console.log('The error while getting movies:', err));
 });




module.exports = router;
