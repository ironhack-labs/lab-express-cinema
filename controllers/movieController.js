const Movie = require("../models/Movie.model");

exports.home = (req, res, next) => res.render("index");

exports.listMovies = (req, res) => {
  Movie.find({})
    .then((dbMovies) => {
      res.render("movies/movies", {
        //"URL/document.hbs"
        movieList: dbMovies,
      });
    })
    .catch((error) =>
      console.log(`Hubo un error en listar películas: ${error}`)
    );
};

exports.movieById = (req, res) => {
  const { movieID } = req.params;

  //Trayendo de la DB
  Movie.findById(movieID)
    .then((movie) => {
      res.render("movies/movie", movie);
    })
    .catch((error) =>
      console.log(`Hubo un error al tarer una película: ${error}`)
    );
};
