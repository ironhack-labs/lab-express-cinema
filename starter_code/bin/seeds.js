

const mongoose = require ('mongoose')
const Movies = require ('./../models/Movies')

const moviesJSON = require ('./movies.json')

mongoose
  .connect('mongodb://localhost/cinema', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Movies.deleteMany()
.then(moviesDeleted => {
  return Movies.create(moviesJSON)
})
.then(moviesCreated => {
  console.log('Movies created')
  process.exit(0)
})