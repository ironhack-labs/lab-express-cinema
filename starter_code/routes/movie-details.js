const express = require('express');
const app = express();
const Movie = require('../models/movie')

app.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id, (err, movies) => {
    if(err) res.status(500).send(err)
    else res.render('show', {movies})
  })
})

module.exports = app;