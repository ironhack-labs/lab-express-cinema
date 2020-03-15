const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find();
  res.render('movies',{movies: movies})
});

router.get('/movie/:id', (req, res, next) => {
   Movie
    .findById(req.params.id)
    .then(film => {
      res.render('movie',film)
    })
});











module.exports = router;
