// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/lab-express-cinema';

const data = require('../data.json');

const fillMovies = async () => {
  try {
    console.log('Connecting do DB...');
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    await Movie.deleteMany();

    const newMovies = data;

    await Movie.create(newMovies);
    console.log(`Inserted ${newMovies.length} movies`);
  } catch (error) {
    return error;
  }
};

fillMovies();
