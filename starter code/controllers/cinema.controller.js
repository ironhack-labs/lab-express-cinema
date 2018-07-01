const mongoose = require('mongoose');
const MovieModel = require('../models/cinema.model');

module.exports.list = (req, res, next) => {
    MovieModel.find()
    .then(movies => {
      res.render('movies', {movies} )
    })
    .catch(error => {
      next(error);
    });
}