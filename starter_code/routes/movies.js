const express = require('express');
const router = express.Router();
const Film = require('../models/movie.model')


/* GET home page */
router.get('/', (req, res, next) => {
  Film.find()
    .then(allFilm => {
      console.log(allFilm)
      res.render('movies', {
        movie: allFilm
      })
    })
    .catch(err => console.log("Error consultando peliculas en la BBDD: ", err))
});

router.get('/details/:id', (req, res, next) => {
  const filmId = req.params.id
  Film.findById(filmId)
    .then(theFilm => {
      console.log(theFilm)
      res.render('details', theFilm)
    })
    .catch(err => console.log("Error consultando peliculas en la BBDD: ", err))
});

module.exports = router;