const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/movies', (req, res, next) => {
  
  Movies.find()
    
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log("Ha habido un error!", err))
});

router.get('/movie-details/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movieId => res.render('movie-details',  movieId ))
    .catch(err => console.log(err))

})

module.exports = router;

