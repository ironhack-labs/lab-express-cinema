const Movie = require('../models/Movie')

exports.indexView = (req,res, next) =>{
  res.render('index');
}

exports.moviesGet = async (req, res, next) => {
  const movies = await Movie.find()
  res.render('movie-list', {movies})
}

exports.moviesDetail = async (req, res, next) => {
  const {id} = req.params;
  const movie = await Movie.findById(id)
  res.render('movie-detail', movie)
}