const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

router.get('/movies/:movieId', (req, res, next) => {
    let movieId = req.params.movieId
    Movie.findOne({'_id': movieId})
    .then(movie => {
      if (!movie) {
          return res.status(404).render('not-found');
      }
      res.render("details", { movie })
    })
    .catch(next)
})

router.get('/movies', async (req, res, next) => {
    try {
        let movies = Movie.find();
        await movies.map(movie => {
            console.log('Our movies: ', movie)
            res.render('movies', { movie });
        }) 
    } catch (error) {
        console.log('Error while getting movies from DB: ', error);
    }
});

module.exports = router;