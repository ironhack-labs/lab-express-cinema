const Movie = require("../models/Movie.model");
module.exports.list = (req,res,next) =>{
    Movie.find()
    .then (movies => {
        console.log(movies);
        console.log(movies[0]._id)
        res.render("movies",{movies})
    })
    .catch((e) => next(e))
}

module.exports.detail = (req,res,next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        console.log(movie);
        console.log(movie.id)
        res.render("detailmovie",{movie})
    } )
}

