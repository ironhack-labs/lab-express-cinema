const express = require('express');
const router = express.Router();

const MovieModel = require('../models/movie.Model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    MovieModel.find()
        .then((movies) => {
            const infoMovies = movies.map((movie) => {
                return {
                    title: movie.title,
                    image: movie.image, // array
                    description: movie.description,
                    id: movie.id
                }
            })
            // res.json(infoArtist)

            res.render('movies', { infoMovies })
        })
        .catch((err) => {
            console.error(err);
        });
})

router.get('/movies/:movieId', (req, res, next) => {
    MovieModel.findById(req.params.movieId)
        .then((movie) => {
            console.log(movie)
            res.render('one-movie', movie)
        })
        .catch(err => console.log('The error while searching artists occurred: ', err));
});

module.exports = router;
