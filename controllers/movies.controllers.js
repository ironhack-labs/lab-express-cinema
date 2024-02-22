const movies = require('../models/Movie.model');
const mongoose = require('mongoose')


module.exports.list = (req, res, next) => {
    movies
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch((error) => console.log(error))
}