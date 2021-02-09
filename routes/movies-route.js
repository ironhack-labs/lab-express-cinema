const express = require('express');
const moviesRouter = express.Router();
const Movies = require("./../models/Movie-models")



/* GET home page */
moviesRouter.get('/', (req, res, next) => {
 Movies.find()
 .then( (allMovies) => {
    const data = { movies: allMovies}
    res.render('movies', data)
})
 .catch( (err) => console.log(err));
})

moviesRouter.get('/:id', (req, res, next) => {
    const {id} = req.params

    Movies.findById(id)
    .then( (selectedMovie) => {
        const data = { selectedMovie: selectedMovie }
        res.render('details', data)
    })
    .catch( (err) => console.log(err));
})

module.exports = moviesRouter;
