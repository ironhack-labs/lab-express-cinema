const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find({}) // this returns all the document in the collection that is tied to the Book model
    .then(documents => { // this function runs WHEN the promise succeeds

      // res.send(documents)
      res.render("movies.hbs", {
        movies: documents // this parameter sets the name of an array of obejcts over which we can iterate in books.hbs
      });
    })
    .catch(err => {
      console.log(err); // this function runs WHEN the promise rejects
    });
})

/*GET more info on an individual movie page */
router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      // res.send(book);
      res.render('movieDetails', {
        movie: movie
      });
    })
    .catch(err => {
      console.log(err);
    });
})


module.exports = router;