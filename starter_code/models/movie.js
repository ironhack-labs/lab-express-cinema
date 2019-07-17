const seedMovies = require("../bin/seeds");

module.exports = {
    getAllMovies: () => seedMovies,
    getMovieByTitle: (title) => seedMovies.find(movie => title === movie.title)
}