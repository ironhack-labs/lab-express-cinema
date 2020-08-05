var express = require('express');
var router = express.Router();

//movies route
router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        console.log('Retrieved Movies from DB:', allTheMoviesFromDB);
        res.render('movies', { movies: allTheMoviesFromDB });
      })
      .catch(error => {
          console.log('Error while getting the movies from the DB: ', error);
      })
});

module.exports = router;