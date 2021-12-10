const router = require('express').Router();
const Movie = require('../models/movie.model');

//All movies
router.get('/movies', (req, res, next)=>{
    Movie.find()
        .then(allMovies => {
            console.log("movies",allMovies)
            res.render('movies.hbs', {movies: allMovies})
        })
        .catch(err => {
            console.log("Error", err);
            next(err);
        })
    
});

router.get('/movies/:movieId', (req,res,next) => {
    const{movieId}= req.params;

    Movie.findById(movieId)
    .then(oneMovie => res.render(`movie-id.hbs`, {movie: oneMovie}))
    .catch(err => {
      console.log(`Error`,err);
      next(err)
})

});

module.exports = router;