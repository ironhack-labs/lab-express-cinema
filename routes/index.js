const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
        res.send('movies',  { movies: allTheMoviesFromDB });
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
      })
  }); */

  router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(theMovie => {
        res.render('movies', { movie: theMovie });
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });

  router.get('/movies', async (req, res, next)=>{
    const movies= await Movie.find();
    res.status(200).render('movies', {movies});
});


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



module.exports = router;

