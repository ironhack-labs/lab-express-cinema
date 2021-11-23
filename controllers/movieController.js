const Movie = require("./../models/Movie.model")

exports.getAllMovies = async (req,res) => {

    console.log("Hola");

    const allMovies = await Movie.find({})
    console.log(allMovies);

    res.render("movies/movies", {
        data: allMovies
    })

}

exports.getMovie = async (req,res)=> {

    const singleMovieId = req.params.movieID

    const getTheMovie = await Movie.findById(singleMovieId)

    console.log(getTheMovie);

    res.render("movies/movieDetails", {
            data: getTheMovie
    })

}



