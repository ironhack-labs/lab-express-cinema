const Movie = require("./../../models/Movie.model")
exports.getAllMovies = async (req, res) => {
	
	const allMovies = await Movie.find({})

	console.log(allMovies)

	res.render("movies/movies", {
		data: allMovies
	})
}

exports.getMovie = async (req, res) => {
	const singleMovieID = req.params.movieID
	const getTheMovie = await Movie.findById(singleMovieID)
	console.log(getTheMovie)

	res.render("movies/singleMovie", {
		data: getTheMovie
	})
}

exports.viewCreateMovie = async (req, res) => {

	res.render("movies/create")

}

exports.createMovie = async (req,res) => {
const title = req.body.title
const director = req.body.director
const image = req.body.image
const stars = req.body.stars
const description = req.body.description
const showtimes = req.body.showtimes

const newMovieCreated = await Movie.create({title, director, stars, description, showtimes, image})

    console.log(newMovieCreated)

res.redirect("/movies")
    console.log("Pelicula recibida")
}