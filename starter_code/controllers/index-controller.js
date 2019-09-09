const Movie = require('../models/Movie')

exports.indexView = (req,res) => res.render('index')

exports.moviesView = (async (req,res) =>{
 const movies =  await Movie.find(Movie)
 res.render('movies', {movies})
})

exports.movieView = async (req,res)=> {
  const {movieid} = req.params
  console.log(movieid)
  const movie  = await Movie.findById(movieid)
  res.render('movie', {movie})
}







