const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies })
      console.log(movies.length)
    })
    .catch()

});



router.get('/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then((movie) => {
      res.render('movieDetail', { movie })
    })
    .catch(error => console.log(error))

});

router.post('/:id/delete', (req, res, next) => {
  const movieId = req.params.id
  Movie.deleteOne({ _id: movieId })
    .then(() => {
      res.redirect("/movies")
    })
    .catch(error => console.log(error))
});


router.get('/add', (req, res, next) => {
  res.render('addMovie')
});

router.post('/add', (req, res, next) => {
  const newMovie = new Movie(req.body)
  Movie.insertMany(newMovie)
    .then(() => {
      console.log("inserted")
      res.redirect("/movies")
    })
    .catch(error => console.log(error))
});

module.exports = router;
