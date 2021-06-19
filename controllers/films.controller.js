const Film = require("../models/Movie.model");

module.exports.showHome = (req, res, next) => res.render('index');

module.exports.showFilms = (req, res, next) => {
    Film.find()
    .then ((films) => {
        res.render("movies", {
            filmsArr: films
        })
    })

}