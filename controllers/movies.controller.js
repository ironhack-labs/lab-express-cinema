const Movie = require('../models/Movie.model')

module.exports.movie = ((req, res, next) => {
    Movie.find({})
    .then((movie) => {
        //console.log(movie[0])
        res.render('movies', {movie: movie})
    })
})

module.exports.detail = ((req, res, next) =>{
    Movie.findById(req.params.id)
        .then((movie) => {
            res.render('movie', movie)
        })
        .catch((e) => next(e))

})