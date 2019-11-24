const Movie = require("../models/Movie")


exports.movies = async (req,res)=>{
  const movies = await Movie.find({}).exec();
  res.render("movies", {movies});
};

exports.moviesInfo = async(req,res)=>{
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('moviesInfo', {movie})
}


