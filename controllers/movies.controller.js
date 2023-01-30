const { model } = require('mongoose')

const Movie = require('../models/Movie.model')

module.exports.list = (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies/list', {movies})
    })
    .catch()
}


module.exports.detail =(req, res, next) => {
    Movie.findById(req.param.id)
    .then(movies => {
        res.render('movies/detail', {movies})
    })
}
