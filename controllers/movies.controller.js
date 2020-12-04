const Movie = require("../models/Movie.model");

const getIndex = (req, res) => {
    try {
        res.render('index')
    } catch (e) {
        console.log(e);
    }
}

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.render("movies", {movies})
    }
    catch (e) {
        console.group(e)
        res.render("error")
    }
} 

const getMovie = async (req, res) => {
    try {
        const { movieId } = req.params;
        const movie = await Movie.findById(movieId);
        res.render("movie", movie)
    } catch (e) {
        console.group(e)
        res.render("not-found")
    }
}

module.exports = {
    getIndex,
    getMovies,
    getMovie
}