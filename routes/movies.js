const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")




router.get('/', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
          console.log(allTheMoviesFromDB);
        // console.log('Retrieved books from DB:', allTheBooksFromDB);
        res.render('movies.hbs', { movies: allTheMoviesFromDB });
      })
      .catch(error => console.log('Error while getting the books from the DB: ', error));
  });

//GET route for movie's detail page
router.get('/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findById(movieId)
        .then(movieFromDB => {
            console.log(movieFromDB);
            res.render('../views/movies-details.hbs', {movie: movieFromDB})
        }).catch(err => console.log(`Error finding movie by Id: ${err}`))
})

module.exports = router;




