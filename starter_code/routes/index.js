const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log(movies);
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movie/:id', (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id)
      .then(movies => {
          console.log(movies);
          res.render('movie', { movies })
      })
      .catch(err => {
          console.error(err);
      })

});


module.exports = router;
