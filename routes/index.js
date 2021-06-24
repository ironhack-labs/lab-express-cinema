const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res, next) => {
    console.log("hola")
	Movie
        .find()
		.then((movies) => res.render('movies', { movie: movies }))

        //{ movies.forEach((elm) =>console.log(`${elm.title}`))})
        //console.log("holaaaaaaaa"))

		.catch((err) => console.log(err));
})

router.get('/movie/:Id', (req, res, next) => {
	Movie
        .findById(req.params.Id)
		.then((movie) => res.render('movie', movie))
		.catch((err) => console.log(err));
})

module.exports = router;