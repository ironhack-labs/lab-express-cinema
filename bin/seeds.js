// To insert in "seeds/movies.seed.js"

const mongoose = require('mongoose')
const movie = require('../models/movie.model')

require('../config/index');
require('../db/index');

const movies = require('../data.json')


  mongoose.connection.once('open', () => {
    // mongoose.connection.dropDatabase()
    movie.deleteMany()
      .then(() => {
        return movie.create(movies)
      })
      .catch(err => {
        console.error(err)
        process.exit()
      })
  })
  




