const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET movies page */
router.get('/movies', (req, res) => {
  Movie.find()
  .then(movies => {
    console.log('those are movies:', movies)
    res.render('movies', {moviesAll: movies});
});
});


module.exports = router;