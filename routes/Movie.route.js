const Movie = require('../models/Movie.model');

/* GET movies list page */
exports.findAll = (req, res) => {
  Movie.find({})
  .then( movies => res.render('movies', {movies}))
  .catch((err) => console.log(err))
}

exports.findById = (req, res) => {
  Movie.findOne({_id: req.params.id})
  .then( movie => res.render('movie', {movie}))
  .catch((err) => console.log(err))
}