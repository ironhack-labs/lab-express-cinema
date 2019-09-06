const Movie = require('../models/Movie')

exports.indexView = (req, res, next) =>{res.render('index')}

exports.getMovies = async(req,res, next) =>{
  const movies = await Movie.find()
  res.render('movies', {movies}) 
}

exports.getDetails = async(req, res, next) => {
  const {id} = req.params
  const movies = await Movie.findById(id)
  res.render('movies-details', movies)
}