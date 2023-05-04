const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {

    Movie
        .find()
        .sort({ title: 1 })           // Ordenamos por título ASC
        .then(movies => {
            console.log(movies)
            res.render('./movies', { movie: movies })
        })
        .catch(err => console.log(err))
})
router.get("/movie/:id", (req, res, next) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => {
            res.render('movie', movie)
        })
        .catch(err => console.log(err))
})


module.exports = router;
