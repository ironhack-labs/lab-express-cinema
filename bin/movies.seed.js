require("../config/db.config.js");

const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");
const movies = require("../movies.json");

mongoose.connection.once("open", () => {
  mongoose.connection
    .dropCollection("movies")
    .then(() => {
      console.log("DB has been cleared");

      return Movie.create(movies);
    })
    .then((moviesDB) => {
      moviesDB.forEach((movie) => {
        console.log(`${movie.title} has been created`);
      });

      console.log(`${moviesDB.length} movies have been created`);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      mongoose.disconnect();
    });
});
