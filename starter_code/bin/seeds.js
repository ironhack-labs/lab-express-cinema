require('dotenv').config();
const mongoose = require ('mongoose')
const Movies = require ('../models/Movies')
const moviesData = require("./moviesData");

mongoose
  .connect(`mongodb://localhost/${process.env.DB}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Movies.deleteMany()
.then(moviesDeleted => {
  return Movies.create(moviesData)
})
.then(moviesCreated => {
  console.log('Movies created')
  process.exit(0)
})
.catch(error => {
  console.log(error);
}); 