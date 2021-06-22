
const Movie = require('../models/Movie.model');

module.exports.listMovies = (req, res, next) => {
    Movie.find()
        .then((posts) => {
            console.log(movies)
            res.render('index', { movies: movies });
        })
        .catch(e => console.log(e))
    
}