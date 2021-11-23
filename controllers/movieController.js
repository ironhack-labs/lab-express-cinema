const Movie = require("../models/Movie.model")

exports.getAllMovies  = async   (req,res) =>{
    	
	const allMovies = await Movie.find({})

	

	res.render("peli", {
		data: allMovies
	})

}

exports.getMovie  = async   (req,res) =>{
	
    	
	const oneMovieID = req.params.peliID
	const getTheMovie = await Movie.findById(oneMovieID)

	console.log(getTheMovie)

	res.render("moviesFolder/single", {
		data: getTheMovie
	})
	
 }


//  exports.getBook = async (req, res) => {

// 	const singleBookID = req.params.bookID

// 	const getTheBook = await Book.findById(singleBookID)

// 	console.log(getTheBook)

// 	res.render("books/single", {
// 		data: getTheBook
// 	})
// }

