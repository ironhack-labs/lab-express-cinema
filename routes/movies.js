const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")


/* GET home page */
router.get('/', (req, res) => {
  Movie.find().then(movies => {
    res.render('movies', {movies});

  })
});

router.get('/:id', (req, res) => {

  console.log(req.params.id)
  Movie.findById(req.params.id).then(movie => {
    console.log(movie);
    res.render('movie', movie);

  })
});


module.exports = router;
