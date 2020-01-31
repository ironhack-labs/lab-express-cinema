const Movie = require("./Movies");

function listMovies() {
  return Movie.find();
}

function viewMovie(id) {
  return Movie.findById(id);
}

module.exports = {
  listMovies,
  viewMovie
};
