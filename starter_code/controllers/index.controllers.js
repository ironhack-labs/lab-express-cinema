const Movie = require('../models/Movie')

exports.indexView = (req, res, next) =>{res.render('index')}

exports.moviesView = async(req,res, next) =>{
  const movies = await Movie.find()
  res.render('movies', {movies}) 
}

exports.moviesSched = async(req, res, next) => {
  const {id} = req.params
  const movies = await Movie.findById(id)
  res.render('movies-schedule', movies)
}