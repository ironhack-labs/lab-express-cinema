const express = require('express');
const router  = express.Router();
const movieModel = require('./../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  movieModel
  .find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(dbErr => {
    console.log('Database Error', dbErr);
  });
});

router.get('/movies/:id', (req,res) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render('page-movie', {movie});
    })
    .catch(dbErr => console.error("Database Error", dbErr));
});

module.exports = router;
