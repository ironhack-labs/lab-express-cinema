const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async function (req, res, next) {
  const movies = await Movie.find();

  if(movies.length) {
      res.render('movies', {
        movies: movies
      });
  } else {
    res.status(404)
        .send("Something went wrong!");
  }

});

router.get('/movie/:id', async function (req, res, next) {
    const movie = await Movie.findById(req.params.id);

    if(movie) {
        res.render('movieInfo', {
            movie: movie
        });
    } else {
        res.status(404)
            .send("Something went wrong!");
    }

});

module.exports = router;
