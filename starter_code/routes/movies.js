const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

/* GET home page */
// router.get('/movies', async (req, res, next) => {
//   const movies = await Movie.find();
//   console.log(movies);
//   res.render('movies', {movies});
// });

module.exports = router;