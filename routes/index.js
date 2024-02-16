const express = require('express');
const Movies = require('../models/movie.model')
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then((movies) => {
      res.render('movies', { movies })
    })
    .catch((error) => console.error("can't find the movies", error))
})

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  console.debug(`Estoy devolviendo ${id}`);

  Movies.findById(id)
   .then((movie) => {
    if (!movie) {
      return res.status(404).send('The film has not been found');
    }
    res.render('movieDetails', { movie });
   })
   .catch((error) => {
    console.debug('There is no movie whith that Id', error);
    res.status(500).send('Internal Server Error');
  });
});

module.exports = router;
