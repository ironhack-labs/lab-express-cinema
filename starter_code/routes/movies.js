const express = require('express');

const router = express.Router();
const importMovies = require('../models/Movies.js');


/* GET home page */
router.get('/', (req, res, next) => {
  importMovies.find({})
    .then((movies) => {
      console.log('Works');
      console.log(movies);
      res.render('movies', { movies });
    });
});


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  importMovies.findById(id)
    .then((movies) => {
      console.log(movies);
      res.render('movie', { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
