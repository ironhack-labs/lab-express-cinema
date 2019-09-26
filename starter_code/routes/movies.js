var express = require("express")
var app = express()

var Movie = require("../models/movie")

app.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.render('movies', {movies:movies})
    })
    .catch((err) => {
      res.send(err)
    }) 
})

app.post("/create", (req, res) => {
  console.log(req.body)
  var newMovie = new Movie({
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars,
    description: req.body.description,
    showtimes: req.body.showtimes,
    image: req.body.image
  })
  newMovie.save()
    .then((movie) => {
      res.redirect(`/movie/?id=${movie.id}`)
    })
    .catch((err) => {
      res.send(err)
    })
})

app.get("/delete", (req, res) => {
  Movie.findByIdAndDelete(req.query.id)
    .then((movie) => {
      res.redirect("/movies")
    })
    .catch((err) => {
      res.send(err)
    })
})

module.exports = app