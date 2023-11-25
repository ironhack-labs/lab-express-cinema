const mongoose = require('mongoose');
const Movie = require('../models/Movie.model')


const moviesData = require('../constants/moviesData')
require('../db/index')
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  

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
      .then((moviesDb) => {
        // Log de los documentos que se crean
        moviesDb.forEach(movie => console.log(movie))
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