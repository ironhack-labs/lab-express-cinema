const router = require("express").Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get("/movies", (req, res, next) => {

  Movie.find()
		.then(moviesFromDB => {
			console.log(moviesFromDB);
			res.render('movies/index', { moviesFromDB, pageTitle: 'Movies' });
		})
		.catch(err => {
			console.log(err)
		})
});

module.exports = router;