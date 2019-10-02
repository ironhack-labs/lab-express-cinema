var express = require("express")
var app = express()
var Movie = require("../models/movie")
var Director = require("../models/director")
var mongoose = require("mongoose")
var multer = require("multer")
var upload = multer({ dest: `${__dirname}/../uploads` })

app.get('/movies', (req, res, next) => {
    console.log(req.session)
    Promise.all([Movie.find({}), Director.find({})])
    .then((returnedPromise) => {
      res.render('movies', {movies: returnedPromise[0], directors: returnedPromise[1]})
    })
    .catch((err) => {
      res.send(err)
    }) 
})

app.post("/create", upload.single("image"), (req, res) => {

  var newMovie = new Movie({
    title: req.body.title,
    director: mongoose.Types.ObjectId(req.body.directorId),
    stars: req.body.stars,
    description: req.body.description,
    showtimes: req.body.showtimes,
    image: req.file.filename
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