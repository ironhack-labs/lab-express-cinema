const express = require('express');
const router = express.Router();
const Movies = require('../models/movie')

/* GET home page */
router.get('#', (req, res) => {
  Movies.find()
    .then(allMovies => res.render('movies', { movies: allMovies }))
    .catch(err => console.log("Hubo un error en find", err))
});

module.exports = router;
