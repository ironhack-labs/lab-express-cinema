const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js'); // <== this line 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
// routes/index.js


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log('Retrieved movies from DB:', movies);
      res.render('movies', {movies: movies});
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});


router.get('/movie/:id', async (req, res, next) => {
  const [movie] = await Movie.find({ _id: req.params.id });
  res.render('movie', { movie, title: 'test' });
});



module.exports = router;
