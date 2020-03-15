const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find();
  console.log(movies)
  res.render('movies', {movies})
});

router.get('/display/:_id', async (req, res, next) => {
  const moviesId = await Movie.findOne(req.params);
  await console.log(req.params._id)
  //console.log(moviesId)
  res.render('display', moviesId)
})

module.exports = router;
