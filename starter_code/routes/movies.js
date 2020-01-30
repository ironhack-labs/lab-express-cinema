const express = require('express');
const router  = express.Router();
const movieModel = require("./../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  movieModel
  .find()
  .then(movies => {
    console.log(movies)
    res.render('movies', {movies});
  })
  .catch(dbErr => {
    console.log("erreur route movies", dbErr)
  })
});

router.get('/:id', (req, res, next) => {
  
  console.log(req.params.id)

  movieModel
  .findById(req.params.id)
  .then(movie => {
    console.log(movie)
    res.render('movie-read', {movie});
  })
  .catch(dbErr => {
    console.log("erreur route movie-read", dbErr)
  })
});

module.exports = router;
