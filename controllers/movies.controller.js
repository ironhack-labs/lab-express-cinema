const Movie = require("./../models/Movie.model");

const listMovies = async (req, res) => {
  let movies = await Movie.find({});

  res.render("movies/index", {
    movies: movies,
  });
};

const singleMovie = async (req, res) => {
  const { movieId } = req.params;
  let movie = await Movie.findById(movieId);
  res.render("movies/singleMovie", movie);
};

module.exports = {
  listMovies,
  singleMovie,
};
