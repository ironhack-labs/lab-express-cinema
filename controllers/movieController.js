const Movie = require("../models/Movie.model")

exports.getMovies = async (req, res) => {

    try {

        const foundMovies = await Movie.find({})
        console.log(foundMovies)

        res.render("movies", {
            data: foundMovies
        })

    } catch (error) {

        console.log(error)

    }

}