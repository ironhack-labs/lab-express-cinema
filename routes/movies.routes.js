const router = require('express').Router();
const MovieModel = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
    MovieModel.find()
        .then((movies) => {
            res.render('movies/movies.hbs', {movies});
        })
        .catch(err => {
            next(err);
        }) 
})

router.get('/movie/:id', (req, res, next) => {
    const {id} = req.params;
    console.log("I run")
    MovieModel.findById(id)
    .then((singleMovie) => {
        console.log("I run 2")
            res.render('movies/movie-details.hbs', {singleMovie});
        }).catch((err) => {
            next(err);
        });
})

module.exports = router;