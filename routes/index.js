const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;


router.get("/movies", (req, res, next) => {
    // res.render("movies");

    Movie
        .find()
        .then(movies => {
            console.log(movies)
            res.render('movies', { movies })

        })
        .catch(err => console.log(err))
})

/*router.get('/movies', (req, res) => {

    Movie
        .find()
        //.select({ title: 1 })
        .then(movies => {
            res.render('movies', { movies })

        })
        .catch(err => console.log(err))
})
 */

router.get('/movies/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('movieDetail', movie)
        })
        .catch(err => console.log(err))
})

module.exports = router;