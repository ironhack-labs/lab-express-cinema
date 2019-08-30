const express = require('express');
const router  = express.Router();

const movies = require('../models/Movies')

/* GET movie page */
router.get('/movies', (req, res, next) => {
  movies.find({})
    .then(listOfMovies => { console.log(listOfMovies)
      res.render('movies', { listOfMovies })})  
    .catch(err => console.log('Error: ', err))

});

router.get('/movies/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  movies.findById({_id: movieId})
    .then(dbRes => {
      console.log(dbRes);
      res.render('movie', { movie: dbRes })
    })
    .catch(err => console.log('Error :', err))
})

module.exports = router;