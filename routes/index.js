const express = require('express');
const router  = express.Router();
const Movie   = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies =>{
    var moviesArr = [];
    movies.forEach(movie =>{
      movieObj = {
        'id': movie._id,
        'title': movie.title,
        'image': movie.image  
      };

      moviesArr.push(movieObj);
    });
    res.render('movies', {moviesArr});
    console.log(moviesArr);
  })
  .catch(error =>{
    console.log(error);
  });
});

router.get('/movies/:movieId', (req, res, next) => {
  let movieId = req.params.movieId;
  Movie.findOne({'_id': movieId})
    .then(movie => {
      res.render("movie-detail", { movie })
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
