const Movies = require("../models/movie.model");

module.exports.home = (req, res) => res.render("pages/details", { home: true });

module.exports.list = (req, res) => {
    Movies.find().then((movies) => {
        res.render("pages/details", { data: movies, movies: true });
    });
};

module.exports.single = (req, res) => {
    Movies.find({ _id: req.params.id }).then((movie) => {
        res.render("pages/details", { data: movie[0], movie: true });
    });
};