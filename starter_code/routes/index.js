const express = require('express');
const router  = express.Router();

const mongoose = require('mongoose') 
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find()
  .then(allTheMovies => {
    console.log(allTheMovies)
    res.render('movies', {allTheMovies});
  })
  .catch(err => {
    console.log(err)
  })

});

router.get('/movies/:id', (req, res, next) => {
  
  Movie.findById(req.params.id)
  .then(singleMovie =>{
    console.log(singleMovie)
    res.render('details', {singleMovie});
  })
  .catch(err =>{
    console.error(err);
  })
})

module.exports = router;
