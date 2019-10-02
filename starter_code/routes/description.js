var express = require("express")
var app = express()

var Movie = require("../models/movie")

// app.get("/movie/:id", (req, res, next) => {
//   Movie.findOne({_id: req.params.id})
//   .then((movie) => {
//     res.render("description", {movie:movie})
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// })

app.get("/movie", (req, res, next) => {
  Movie.findOne({_id: req.query.id})
  .populate("director","name")
  .then((movie) => {
    console.log(movie)
    res.render("description", {movie:movie})
  })
  .catch((err) => {
    res.send(err)
  })
})

module.exports = app