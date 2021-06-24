const express = require('express');
const router = express.Router();

require("dotenv/config")


const Movie = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

  Movie
    .find()
    .then(movies => res.render('movies-list', { movies }))
    .catch(err => console.log('UPS, hay un error cargando la lista de pelis', err))
})

router.get('/movies/details/:movies_id', (req, res) => {

  const { movies_id } = req.params

  Movie
    .findById(movies_id)
    .then(movie => res.render('movies-details', movie))
    .catch(err => console.log(err))
})



module.exports = router;
