const express = require('express');
const router = express.Router();
var Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find();
    await console.log('movies', movies)
    res.render('movies', {movies})
});

router.get('/movie/:id', async function(req, res, next){
    console.log(req.params.id)
    let movie = await Movie.findById(req.params.id);
    console.log(movie)
    res.render('movie', {movie})
  })

module.exports = router;
