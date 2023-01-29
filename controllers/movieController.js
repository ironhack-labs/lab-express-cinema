const Movie = require("../models/movie.model");

module.exports.list = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((error) => next(error));
};
