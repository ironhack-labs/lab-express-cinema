const Movie = require("../models/movie.model");

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies/list", { movies });
    })
    .catch(() => {});
};

module.exports.detail = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/details", { movie });
    })
    .catch(next);
};
