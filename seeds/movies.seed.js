const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const MOVIES = require('../data/movies.json');
console.log('Hola seeds')
require('../config/index');

mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            console.info('DB eliminada.');
            return Movie.create(MOVIES);
        })
        .then(createdMovies => {
            createdMovies.forEach(movie => console.log(`${movie.title} ha sido creado.`));
            return mongoose.connection.close();
        })
        then(() => {
            console.log('Conexión finalizada.');
            process.exit(1);
        })
        .catch(err => {
            console.error(err);
            process.exit(0);
        })
});