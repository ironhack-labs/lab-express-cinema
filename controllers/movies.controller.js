const Movie = require("../models/Movie.model");
module.exports.getMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((err) => console.error(err));
};

module.exports.getMovieDetail = (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      res.render("movie-detail", { movie });
    })

    .catch((err) => console.error(err));
};
