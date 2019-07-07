const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find()
          // -> all moviesFromDB is a placeholder, it can be any word
         // |
    .then(allTheMoviesFromDB => {
      // console.log('Retrieved movies from DB:', allTheMoviesFromDB);
      res.render('movies', { allTheMovies: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
 
});

router.get('/movie/:idmovie', (req, res, next) => {
  console.log("id movie is: " + req.params.idmovie);
  Movie.findById(req.params.idmovie)
    .then((movieX)=>{
      res.render('movie', {moviex: movieX});

    })


});

module.exports = router;
