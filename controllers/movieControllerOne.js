const Movie = require("../models/Movie.model")

exports.getMoviesOne = async (req, res) => {

    try {
        const movieOne = req.params.id
        console.log(movieOne)
        const foundMovies = await Movie.findOne({title: movieOne})
        console.log(foundMovies)
    
        res.render("moviesOne",{
            data: foundMovies

        })

    }catch(error){

        console.log(error)

    }

    
}