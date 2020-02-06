const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(allMovies => {
      console.log('Retrieved movies from DB:', allMovies);
       res.render('movies', {
         allMovies
       });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
 
});

router.get('/movie/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
      // console.log('Retrieved movies from DB by id:', movie);
      // res.json(movie)
      res.render('moviesdetail', 
       movie
      );
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })

});



module.exports = router;