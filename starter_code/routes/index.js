const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(moviesFromDB => {
      res.render('movies', {movies: moviesFromDB});
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
  
}); 
router.get('/movies/:id', (req, res)=>{
  Movies.findOne({_id: req.params.id})
  .then(movie=>{
    res.render('moviesdetails', movie)})

    .catch(error => {
      console.log('Error while getting info: ', error);
    })
  });
