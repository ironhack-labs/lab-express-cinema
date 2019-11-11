const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find({}).then(documents => {
    // this function runs WHEN the promise succeeds
    console.log(documents);

    // res.send(documents);
    res.render('movies.hbs', {
      movies: documents
    });

  }).catch(err => {
    // this function runs WHEN the promise rejects
    console.log(err)
  })

});


router.get('/movies/:movieId', (req, res) => {
  Movie.findById(req.params.movieId).then(movie => {
    res.render("movieDetails.hbs", {
      movie: movie
    });
  }).catch(er => {
    console.log(err)
  });
});


module.exports = router;