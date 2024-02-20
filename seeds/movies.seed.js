require('dotenv').config();
require('../configs/db.config');
const Movie = require('../models/movie.model');
const movies = require('../data/movies');

Movie.create(movies)
    .then((movies) => console.log(`${movies.length} movies created`))
    .catch((error) => console.error(error));