const Movies = require("../models/Movie.model");


module.exports.home = (req, res, next) => {
    res.render('index')
}

module.exports.listMovies = (req, res, next) => {
    Movies.find()
    .then((movies) => {
        console.log(movies)
      res.render('movies', { movies });
    })
    .catch(e => console.error(e))
};

module.exports.getMovie = (req, res, next) => {
    Movies.findById(req.params.id)
        .then((movie) => res.render('detail', { movie }))
        .catch(e => console.error(e))
}
