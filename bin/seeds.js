require('../config/db.config.js');
const mongoose = require('mongoose');
const Movie = require('../models/movies.models');
const movies = require('../movies.json');

mongoose.connection.once('connected', () => {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            console.log('Database cleared');
            return Movie.create(movies);
        })
        .then((moviesDB) => {
            moviesDB.forEach(movie => {
                console.log(`${movie.title} has been created`);
            });
        })
        .catch((error) => {
            console.log('Error while seeding the database', error);
        })
        .finally(() => {
            mongoose.connection.close();
        });
});



