const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const movies = require("./movies-seed-data");

Movie.create(movies)
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} movies`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => console.log(`An error occurred while creating movies from the DB: ${err}`));