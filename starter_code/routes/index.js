const express = require('express');
const router  = express.Router();
const Movie = require ('../models/Movie.js');


/* GET home page */
router.get('/', (req, res, next) => {
  console.log("hola")
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movie => {
    res.render('movies',{movie});
  })
  .catch(error => {
    console.log(error)
  })

  router.get('/movie/:id', (req, res, next) => {
    Movie.find()
    .then(movie => {
      res.render('movies',{movie});
    })
    .catch(error => {
      console.log(error)
    })
  
  
});

module.exports = router;
