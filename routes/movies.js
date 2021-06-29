const router = require("express").Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get("/movies", (req, res, next) => {

  Movie.find()
		.then(moviesFromDB => {
			console.log(moviesFromDB);
			res.render('movies', { moviesFromDB, pageTitle: 'Movies' });
		})
		.catch(err => {
			console.log(err)
		})
});

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
          .then(movie => {
              console.log(movie)
              res.render('movie', { movie, pageTitle: movie.title });
          })
          .catch(err => {
              console.log(err)
          })
  });

module.exports = router;