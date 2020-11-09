const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


module.exports = router;


/* const { title, director, stars, image, description, showtimes } = req.body;

Movie.create({title, director, stars, image, description, showtimes})
   .then((allMoviesFromDB) => res.render("movie", )) */