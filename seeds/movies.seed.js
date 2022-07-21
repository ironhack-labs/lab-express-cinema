// Script that will be run to actually seed the database

const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')
const MOVIES = require('../data/movies.json')

// Conectarme a la base de datos

require('../config/db.config')

// Vaciar la base de datos

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase()
    .then(() => {
      console.info('Db dropped')

      return Movie.create(MOVIES)
    })
    .then(createdMovies => {
      createdMovies.forEach(movie => console.log(`${movie.title} was created`))

    // Cerrar la conexión
      return mongoose.connection.close()
    })
    .then(() => {
      console.log('Connection closed')

      process.exit(1)
    })
    .catch(err => {
      console.error(err)
      process.exit(0)
    })
})