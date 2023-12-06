const mongoose = require('mongoose');
const Movie = require('../models/movie.model');
const moviesData = require('../constants/moviesData');

// Conectarnos a la base de datos
require('../db/index');

mongoose.connection.once('connected', () => {
  console.log('Seeds connected to DB');

  // Borrar todo lo que hubiese antes
  mongoose.connection.dropDatabase()
    .then(() => {
      console.log('DB has been cleared');
    })
    .then(() => {
      // Crear los documentos en la base de datos a partir del modelo
      return Movie.create(moviesData)
    })
    .then((moviesDB) => {
      // Log de los documentos que se crean
      moviesDB.forEach(movie => console.log(movie))
    })
    .catch(err => console.error(err))
    .finally(() => {
      // Cerrar la conexión y parar la ejecución del script
      mongoose.connection.close()
        .then(() => {
          console.log('End of seeds');
        })
        .catch(err => console.error(err))
        .finally(() => {
          process.exit(0)
        })
    })
})