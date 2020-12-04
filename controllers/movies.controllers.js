const Movie = require("../models/Movie.model");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.render("movies", { movies });
  } catch (err) {
    res.send(err);
  }
};

const getMovie = async (req, res) => {
  try {
     console.log(req.params) 
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    console.log(movie);
    res.render("movie-detail", movie);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    getMovies,
    getMovie,
    
  };