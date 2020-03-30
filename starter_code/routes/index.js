const express = require('express');
const router  = express.Router();
let Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie
    .find()
    .then((movies) => {
      res.render('movies', {movies});
      // res.send(movies);
    })
    .catch((err) => console.log(err));
})

router.get('/movie/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then((movie) => {
      res.render('movie', movie)
    })

})

module.exports = router;
