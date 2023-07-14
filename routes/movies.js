const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

// Movies route
router.get('/', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch((error) => {
      console.error('Error retrieving movies:', error);
      // res.status(500).send('Internal Server Error');
    });
});

// router.get('/:id', (req, res) => {
//   Movie.findById(req.params.id)
//   .then((movie) => {
//     res.render('movie-info', movie)

//   })
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then((movie) => {
      res.render('movie-info', movie)
  })
})

  // // .catch((error) => {
  //   console.error('Error retrieving movies:', error);
  //   // res.status(500).send('Internal Server Error');
  // });

module.exports = router;


