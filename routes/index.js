const express = require('express');
const router = express.Router();
const MovieModel = require('../Models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;


router.get('/movies', (req, res, next) => {
  MovieModel.find()
    .select('title image')
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch((err) => {
      console.error(err);
    })
})

router.get('/movie/:idmovie', (req, res, next) => {
    MovieModel.findById(req.params.idmovie)
    .then((film) => {
      console.log(film);
      res.render('movie',  film ); // no entiendo porque lo tengo que pasar a objeto si ya es un objeto
    })
    .catch((err) => {
      console.error(err)
      res.render('error');
    });

});