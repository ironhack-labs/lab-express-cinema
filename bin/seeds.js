require('../configs/db.config');
require('dotenv').config();

const Movie = require('../models/Movie.model');
const movies = require('../data/movies');

  Movie.create(movies)
    .then((movies) => console.log(`${movies.length} movies created`))
    .catch((error) => console.error(error));
