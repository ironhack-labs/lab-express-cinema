const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


const movies = require('../models/Movie.model.js');

router.get('/index', (req, res) => {
    movies.find()
      // -> allTheBooksFromDB is a placeholder, it can be any word
      // |
      .then(allTheMoviesFromDB => console.log('Retrieved books from DB:', allTheMoviesFromDB))
      .catch(error => console.log('Error while getting the movie from the DB: ', error));
  });

router.get('movies/:movieId', (req, res) => {
    const { movieId } = req.params;
   
    Book.findOne(movieId)
      .then(theMovie => res.render('see more', { movie: theMovie}))
      .catch(error => console.log('Error while retrieving movie details: ', error));
  });
  
module.exports = router;
