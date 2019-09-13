const express = require ('express')
const moviesRouter = express.Router()
const mongoose = require ('mongoose')
const Movies = require ('./../models/Movies')

mongoose
  .connect('mongodb://localhost/cinema', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  
moviesRouter.get('/', (req, res) => {
  Movies.find()
  .then(listOfMovies => {
    res.render('movies', {listOfMovies})
  })
})

// moviesRouter.get('/movie/:movieID', (req, res) => {
//   Movies.findById(req.params.movieID)
//   .then(movieFound => {
//     res.render('movie', {movieFound})
//   })
//   .catch(error => {
//     console.log(error)
//   })
// })

module.exports = moviesRouter;
