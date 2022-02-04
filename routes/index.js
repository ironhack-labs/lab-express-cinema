const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res)=> {
    Movies
    .find()
    .then(movies => res.render('movies', {movies}))
    .catch(err => console.log(err))
})
router.get('/movies/:id', (req, res) => {

    Movies
      .getMovie(req.params.id)
      .then(movieFromApi => res.render('moviesID', { moviesId: movieFromApi }))
      .catch(error => console.log(error));
  })

module.exports = router;