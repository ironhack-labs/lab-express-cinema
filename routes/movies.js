const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/movies', (req, res) => {
  Movie.find().then(moviesFromDB => {
    res.render('movies', { moviesList: moviesFromDB });
  }).catch(err => {
    console.log(err);
  })
});

// router.get('/movies/:Id', (req, res) => {
//   const Id = req.params.Id;
//   Movie.findById(Id).then(movieFromDB => {
//     res.render('Details', { movie: movieFromDB });
//   }).catch(err => {
//     console.log(err);
//   });
// });

module.exports = router;