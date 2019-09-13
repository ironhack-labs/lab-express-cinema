const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');


router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => {
    console.log("====>",{movies})
    res.render('movies', {movies});
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/movies/:moviesId', (req, res, next) => {
  Movies.findById(req.params.moviesId)
  .then(function(data) {
    console.log('Movies list ===>', data);
      res.render('moviesInfo', {movies: data.body.movies});
  }, function(err) {
    console.error(err);
  });
});

module.exports = router;
