const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/movies', (req, res, next) => {
  Movies.find({})
    .then(movies => {
      return res.render("movies", { movies });
    })
    .then(() => {
      console.log('Connection close!')
      mongoose.connection.close()
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movie/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movies.find({_id: movieId})
    .then(movie => {
      return res.render("movie", {movie});
    })
    .then(() => {
      return res.render("movies", { movies });
      mongoose.connection.close()

    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
