const {
  mongooseClose,
  mongooseConnect,
  mongooseDropCollection,
} = require('../db/index');
const Movie = require('../models/Movie.model');
const moviesData = require('./movies.data');

async function seedMovies() {
  try {
    await mongooseConnect();
    await mongooseDropCollection();
    const movies = await Movie.insertMany(moviesData);
    console.log('movies', movies);
    await mongooseClose();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

seedMovies();
