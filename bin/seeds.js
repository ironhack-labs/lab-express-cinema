const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')
const MOVIES = require('../seeds/movies.seed.json')
  
  
// Conectarme a la base de datos
require('../db')

// Vaciarla

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase()
    .then(() => {
      console.info('Db dropped')

      return Movie.create(MOVIES)
    })
    .then(createdMovies => {
        createdMovies.forEach(movie => console.log(`${movie.title} was created`))

      // Cerrar la conexion
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