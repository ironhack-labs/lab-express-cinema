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

router.get('/one-movie/:idMovie', (req, res, next) => {

  Movie.findById(req.params.idMovie)
    .then(data => res.render('one-movie', data))
    .catch(err => console.log('ha habido un error cogiendo las movies', err))
})


module.exports = router;