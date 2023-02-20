const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

/* GET home page */
router.get('/movie', (req, res, next) => {

    Movie.find()
    .then(movie => {
      console.log('Retrieved movie from DB:', movie);
      res.render('movie',{movie :movie})

    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });

});

router.get('/movie/:movieId',(req,res,next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then(theMovie => {
    console.log(theMovie);
    res.render('movie-info', theMovie)})
  .catch(error => {
    console.log('Error while retrieving book details: ', error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });

})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> bc2ec5d1ff71498237900829b708aaa2a1abe94c
