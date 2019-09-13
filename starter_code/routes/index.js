const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie"); //this needed to be added

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      console.log('Retrieved movies from DB:', moviesFromDB);
      res.render('movies.hbs', { movies : moviesFromDB});
    })
    .catch(error => {
      console.log('Error getting movies from DB', error);
    })
  // res.render('movies')
})

router.get('/info/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(singleMovie => {
    res.render('info.hbs', {info : singleMovie})
  })
  .catch(error => {
    console.log('Error getting movies from DB', error);
  })
})

module.exports = router;

