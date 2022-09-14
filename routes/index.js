const express = require('express');
const router = express.Router();
const { Movie } = require('../models/Movie.model'); // Copy - pasted // not understood yet

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', async (req, res, next) => {
  Movie.find({})
    .then((data) => {
      // console.log(typeof allMovies);
      // res.send(data);
      res.render('movies', { Movies: data }); // Don´t have to send all data here...
    })
    .catch((err) => {
      console.error(err);
    });
});
/* GET details page */
router.get('/details/:movieId', async (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((data) => {
      console.log(data.title);
      res.render('details', { movieDetails: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
