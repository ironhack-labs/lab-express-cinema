const Movie = require('../models/movie.model')

module.exports.list = (req, res, next) => {
    Movie.find()
    .then((movies) => {
      res.render("movies/list", {movies});
    })
    .catch((err) => {
      // TODO
    });
  };

  module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
      .then((movie) => {
        res.render('movies/detail', { movie }); 
      })
      .catch(() => {
      
      });
  };