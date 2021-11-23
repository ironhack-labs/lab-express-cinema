const Movie = require("./../models/Movie.model")

exports.getAllMovies = async(req,res) => {

    const allMovies = await Movie.find({})

    console.log(allMovies)

    res.render("movies/movies", {

        data: allMovies

    })

}



exports.getMovie = async(req,res) => {

    const singleMovieID = req.params.MovieID

    const getTheMovie = await Movie.findById(singleMovieID)

    console.log(getTheMovie)

    res.render("/movies/single", {

        data: getTheMovie
        
        
    })

    
}




