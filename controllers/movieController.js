const Movie = require("../models/Movie.model")
exports.getAllMovies = async (req,res) => {
    const allMovies = await Movie.find({})
    console.log(allMovies);
    res.render("movies/movies", {
        data:allMovies
    })
}
exports.getMovie = async (req,res)=> {
    const singleMovieId = req.params.movieID
    const getTheMovie = await Movie.findById(singleMovieId)
    console.log(getTheMovie);
    res.render("movies/single", {
            data:getTheMovie
    })
}

// exports.createMovie = async (req,res) => {
//     console.log(req.body);
//     const title = req.body.title
//     const director = req.body.director
//     const stars = req.body.stars
//     const image = req.body.image
//     const description = req.body.description
//     const showtimes = req.body.showtimes
//     const newMovieCreated = await Movie.create({title, director, stars, image, description, showtimes})
//     console.log(newMovieCreated)
//     res.redirect("/movies")
//     console.log("Datos recibidos");
// }