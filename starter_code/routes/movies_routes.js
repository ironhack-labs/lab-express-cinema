const express = require('express');
const router  = express.Router();

const movies = require('../models/Movies')

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('movies');
// });

router.get('/list', (req, res, next) => {
  movies.find({})
    .then(allTheMovies => {
      console.log(allTheMovies)
      res.render('movies', { allTheMovies })})  
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  movies.findById(movieId)
    .then(theMovie => res.render('movies-details', { theMovie }))
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router;