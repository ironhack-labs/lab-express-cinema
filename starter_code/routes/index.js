const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) =>{
  Movie.find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(error => console.log(error))
  
})

router.get('/movies/:id', (req, res, next) =>{
  let {id} = req.params;
  Movie.findById(id)
  .then(movie => {
    console.log(movie);
    res.render('movie-details', movie);
  })
  .catch(error => console.log(error))
})

module.exports = router;
