const Movie = require("../models/movie.model");

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movie/list", { movies });
    })
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movies) => {
      res.render("common/detail", {
        movie: movies,
        stars: movies.stars,
        shows: movies.showtimes,
      });
    })
    .catch((error) => next(error));
};
