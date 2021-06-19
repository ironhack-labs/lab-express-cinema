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

module.exports.showDetail = (req, res, next) => {
    const id = req.params.id;
    Film.findById(id)
    .then((film) => {
        console.log("My FILM: ", film)
        res.render("detail", {
            filmDetails: film
        })
    })
}