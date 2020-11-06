const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res) => res.render('index'));


router.get('/movies', async(req, res) => {
        const movies = await Movie.find();
        console.log(movies)
        res.render('movies', {movies});
})
  
  router.get('/movies/:id', async (req, res) => {
      const movie = await Movie.findById(req.params.id);
      res.render('movie', movie);
      console.log(movie)
  });


module.exports = router;

