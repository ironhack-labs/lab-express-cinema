// To insert in "seeds/movies.seed.js"
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

const {
  mongooseClose,
  mongooseConnect,
  mongooseDropCollection,
} = require("../db");
const Movie = require("../models/Movie.model");
const moviesData = require("./movie.data");

async function seedMovies() {
  try {
    await mongooseConnect();
    await mongooseDropCollection();
    const movies = await Movie.insertMany(moviesData);
    console.log("movies", movies);
    await mongooseClose();
  } catch (error) {
    console.errro(`Error: ${error.message}`);
  }
}

seedMovies();

  