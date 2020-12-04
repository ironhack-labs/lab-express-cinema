const Movie = require("../models/Movie");

//const home = async(req, res, next) => res.render('index')

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        console.log('movies', movies)
        res.render("movies", { movies });
    } catch (err) {
        res.send(err);
    }
};

const getMovie = async (req, res) => {
    const { movieId } = req.params
    const movie = await Movie.findById(movieId)
    console.log(movie)
    res.render('movie-detail', movie)
}

module.exports = { getMovies, getMovie }