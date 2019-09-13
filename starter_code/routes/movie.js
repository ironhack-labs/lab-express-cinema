 
const movieRouter = require ('express').Router()
const Movies = require ('./../models/Movies')
const mongoose = require ('mongoose')

mongoose
  .connect('mongodb://localhost/cinema', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

movieRouter.get('/:movieID', (req, res) => {
  Movies.findById(req.params.movieID)
  .then(movieFound => {
    res.render('movie', {movieFound})
  })
})

module.exports = movieRouter