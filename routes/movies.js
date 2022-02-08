const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
    Movie.find()
        .then(moviesList => {
            res.render("movies", { movies: moviesList });
        })
        .catch();
});

router.get("/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
        .then(moviesDetails => {
            res.render("movie-details", { movie: moviesDetails });
        })
        .catch();
});

router.get('/:movieId/edit', (req, res, next) => {
    Movie.findById(req.params.movieId)
      .then(movieToEdit => {
        res.render("movie-edit", { movie: movieToEdit });
      })
      .catch(error => next(error));
  });

  router.post('/:movieId/edit', (req, res, next) => {
    const { movieId } = req.params;
    const { title, director, stars, description, showtimes } = req.body;
    Movie.findByIdAndUpdate(movieId, { title, director, stars, description, showtimes }, { new: true })
      .then(updatedMovie => res.redirect(`/movies/${updatedMovie.id}`))
      .catch(err => {
        console.log('Error updating movie...', err);
      })
  });
  
  router.post('/:movieId/delete', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findByIdAndDelete(movieId)
      .then(() => res.redirect('/movies'))
      .catch(err => {
        console.log('Error deleting movie...', err);
      })
  });

module.exports = router;