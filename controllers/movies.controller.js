const { findById } = require("../models/Movie.model");
const Movies = require("../models/Movie.model")

const getMovies = async (req,res) => {
  try{
  const movies = await Movies.find();
  console.log(movies)
  res.render("movies", {movies});
  }catch(e){
    res.send(e)
  }
};
const getMovie = async(req,res) => {
  try{
    const {movieId} = req.params
    const movie = await Movies.findById(movieId)
    console.log(movie)
    res.render("movie-detail", movie)
  }catch(e){
    console.log(e)
  }
}

module.exports = {
  getMovies,
  getMovie,
};

