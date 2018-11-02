const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(moviesFromDb => {
      console.log("rendering", moviesFromDb)
      res.render('movies', {
        moviesInput: moviesFromDb
      })
    })
    .catch(err => console.log(err))
});

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id //correct??
  Movies.findById(id)
    .then(movieFromDb => {
      console.log(movieFromDb)
      res.render('selectedMovie', {
        movie: movieFromDb
      })
    })
    .catch(err => console.log(err))
})

module.exports = router;
