const mongoose = require('mongoose');
//Model
const Movie = require("../../model/movie.model");

//.json
const movie = require("./movies")

//mongoose
require("../../db/index")

mongoose.connection.once('open', async () => {
    console.log('opened connection!');
    try {
      await Movie.collection.drop();
      console.log('Collections dropped');
  
      const moviesSaved = await Movie.insertMany(movie);
  
      console.log(`Data inserted: ${moviesSaved.length} movies`);
    } catch (error) {
      console.error('Error seeding the database:', error);
    } finally {
      mongoose.connection.close();
    }
  });

  mongoose.connection.once('disconnected', () => {
    console.log('Disconnected from the database');
  });