const Movie = require('../models/Movie')

//controller para traer todas las peliculas
exports.findMovies = (req, res ,next) =>{
 Movie.find()
.then(movies => res.render('movies',{movies}))
.catch(movies => res.render('movies',err))
}

//controller para traer una pelicula

exports.findOneMovie = (req,res,next) =>{
const {id} =req.params
 Movie.findById(id)
 .then(movie => res.render('movie-detail',movie))
 .catch(movie => res.render('movie-detail',err))
}