const express = require('express');
const router = express.Router();
const Movie = require('../views/models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find()
    .then(allMovies => res.render('movies', {
      allMovies
    }))
    .catch(err => console.log('ha habido un error cogiendo las movies', err))


});

module.exports = router;