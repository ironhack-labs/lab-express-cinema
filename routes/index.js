const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
      .then((allTheMoviesFromDB) => {
        console.log("Retrieved movies: ", allTheMoviesFromDB);
        res.render("movies", {
          movies: allTheMoviesFromDB,
        });
      })
      .catch((error) => {
        console.log("Error while getting the movies from the DB ", error);
      });
  });
 
   router.get("/movies/:id", (req, res, next) => {
    const movieId = req.params.id;
    Movies.findById(movieId)
      .then((allTheMoviesFromDB) => {
        console.log("ID: ", allTheMoviesFromDB);
        res.render("movie-page", {
          movieinfo: allTheMoviesFromDB,
        });
       })
      .catch((error) => {
        console.log("Error while getting details from movies ", error);
      });
    });

module.exports = router;
