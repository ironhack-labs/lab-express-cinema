const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie
      .find()
      .then(movies => res.render('movies', { movies }))
      .catch(err => console.log(err))
  })

router.get('/movies/:id', (req, res) => {

    const {id} = req.params;
    console.log("LA ID ES", id);

    Movie
    .findById(id)
    .then(theMovie => res.render('moviedetails', {movies: theMovie}))
    .catch(err => console.log(err))
})


module.exports = router;
