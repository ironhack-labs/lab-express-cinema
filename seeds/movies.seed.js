const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const moviesData = require('../constants/moviesData');
require('../db/index');

mongoose.connection.once('connected', () => {
    mongoose.connection.dropDatabase()
    .then(() => {
        console.log('DB has been cleared');
    })
    .then(() => {
        return Movie.create(moviesData);
    })
    .then((moviesDB) => {
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