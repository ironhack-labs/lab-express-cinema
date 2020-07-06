const express = require('express');
const router = express.Router();
const MovieModel = require('./../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
   //    res.render('movies');
   MovieModel.find()
      .then((movies) => {
         //  console.log(allMovies);
         res.render('movies', { movies });
      })
      .catch(next);
});

router.get('/movie/:id', (req, res, next) => {
   MovieModel.findById(req.params.id)
      .then((movie) => {
        //  console.log(movie);
         res.render('one-movie', movie);
      })
      .catch(next);
});

module.exports = router;
