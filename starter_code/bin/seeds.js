const mongoose = require('mongoose');
const Movie = require ('../models/movie.model');
const movies = require('../data/movies.data');

require('../configs/db.config');

Movie.insertMany(movies)
    .then(movies => {
        console.info(`Seed added ${movies.length} movies to the database`)
        mongoose.connection.close();
    })
    .catch(error => {
        console.error(`Error ${error}`)
        mongoose.connection.close();
    });

