const { Router } = require('express');
const router = Router();
const Movie = require("../models/Movie.model")

router.get('/:movieId', (req, res, next) => {
  
  const { movieId } = req.params;

  Movie.findById(movieId)
  .then( (foundMovie) => {
    console.log(`Movie succesfuly found! ${foundMovie}`);

    res.status(200).render('movie-details', { foundMovie });
  })
  .catch( err => {
    console.error(`error when displaying movie details: ${err}`);

    next(err);
  });
});

router.get('/', (req, res, next) => {
  
  Movie.find({})
  .then( (resultFindMovie) => {
    console.log(`Movie succesfuly found! ${resultFindMovie}`);

    res.status(200).render('movies', { movies : resultFindMovie });
  })
  .catch( err => {
    console.error(`error when looking for movie: ${err}`);

    next(err);
  });
});

module.exports = router;