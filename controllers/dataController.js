const Movie = require('../models/movie.model');

module.exports.getMovies = (req, res, next) => {
  // Traerme de la base de datos todas las ciudades
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch(err => console.error(err));
}

//Igual aquí hay algo mal
module.exports.getMovieDetail = (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render(`movieDetail`, { movie });
    })
    .catch(err => console.error(err))
}

