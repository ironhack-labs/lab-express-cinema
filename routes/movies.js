const router = require("express").Router();
const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((listOfMovies) => {
            const data = {
                moviesList: listOfMovies
            };
            res.render('movies', data)
        })
        .catch((error) => {
            console.log('An error occured, could not load movies list', error);
            next(error);
        });
})

router.get('/movies/add', (req, res) => {
    res.render('movie-add')
})

router.post('/movies/add', (req, res) => {
    const {title, director, description, image} = req.body;
    Movie.create({title, director, description, image})
        .then(()=> res.redirect('/movies'))
        .catch((error) => {
            console.log('Error adding new movie to DB', error);
        })
})

router.get('/movies/:movieId', (req, res) => {
    Movie.findById(req.params.movieId)
        .then((movieDetails) => {
            res.render('movie-details', movieDetails)
        })
        .catch((error) => {
            console.log('An error occured, could not load movie details', error);
            next(error);
        });
})

router.get('/movies/:movieId/edit', (req, res) => {
    Movie.findById(req.params.movieId)
        .then((moviefromDB) => {
            res.render('movie-edit', moviefromDB)
        })
        .catch((error) => {
            console.log('Error loading edit form', error);
            next(error);
        })
})

router.post('/movies/:movieId/edit', (req, res) => {
    const {title, director} = req.body;
    Movie.findByIdAndUpdate(req.params.movieId, {title, director}, { new: true })
        .then((movieFromDB) => {
            res.redirect('/movies/' + movieFromDB._id)
        })
        .catch((error) => {
            console.log("Error updating movie details", error);
            next(error);
        })
})

router.post('/movies/:movieId/delete', (req, res) => {
    Movie.findByIdAndDelete(req.params.movieId)
        .then(() => {
            res.redirect('/movies')
        })
        .catch( (error) => {
        console.log("Error deleting movie from DB", error);
        next(error);
    });
})


module.exports = router;