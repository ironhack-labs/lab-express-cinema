const express = require('express');
const router = express.Router();
const Movie = require("../models/movie")
router.get('/', (req, res, next) => {

  Movie.find()
    .then(allMovies => res.render('movies', {
      allMovies
    }))
    .catch(err => console.log("Ha habido un error!", err))
})

router.get('/:id', (req, res, next) => {

  Movie.findById(req.params.id)
    .then(detailedMovie => res.render('details', detailedMovie))
    .catch(err => console.log("Ha habido un error!", err))
})
module.exports = router;