// To insert in "seeds/movies.seed.js"
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model')
require('../config/db.config')
const movies = require('../data.json')
mongoose.connection.once('open', () => {
  Movie.collection.drop()
  .then(() => {
    return Movie.create(movies)
  })
  .then((moviesCreated) => {
    console.log(moviesCreated)
    process.exit(0)
  })
  .catch(err => {
    console.error(err);
    process.exit(1)
  })
})
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
  // ... your code here