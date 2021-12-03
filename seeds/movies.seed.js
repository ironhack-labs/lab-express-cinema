// Iteration #1
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

const data = require('../data.json');
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  'mongodb+srv://pilauria:CtbSHUys2yPQlyxW@cluster0.q3aua.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-12yrdj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

const fillMovies = async () => {
  try {
    console.log('Connecting to DB...');
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

  console.log('Disconnecting from the database...');
  mongoose.disconnect();
};

fillMovies();
