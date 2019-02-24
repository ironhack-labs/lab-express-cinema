const express = require('express');
const app = express();
const Movie = require('../models/movie')

app.get('/movies', (req, res) => {
  Movie.find({}, (err, movies) => {
    if(err) res.status(500).send(err)
    res.render('movies', {movies})
  })
})

module.exports = app;