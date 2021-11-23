const Movie = require("./../models/movie.Model")

exports.getAllMovies  = async   (req,res) =>{
    	
	const allMovies = await Movie.find({})

	console.log(allMovies)

	res.render("peli", {
		data: allMovies
	})

}


exports.getMovie  = async   (req,res) =>{
   
	const oneMovieID = req.params.peliID
	const getTheMovie = await Movie.findById(oneMovieID)

	console.log(getTheMovie)

	res.render("movies/single", {
		data: getTheMovie
	})
	
 }