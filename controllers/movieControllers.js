const Movie = require("./../models/Movie.model")

exports.getAllMovies = async(req, res) => {
    const allMovies = await Movie.find({})
    console.log(allMovies);
    res.render("movies", {
        data: allMovies
    })
}