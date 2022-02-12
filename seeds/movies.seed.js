const movies = require("../data/movies.json");
const Movie = require("../models/Movie.model");
const mongoose = require("mongoose");

// where is the database connection???
require("../db/index");

mongoose.connection.once("open", () => {
  mongoose.connection.db
    .dropDatabase()
    .then(() => {
      console.log("deleting");
    })
    .then(() => {
      return Movie.insertMany(movies);
      // have to return this so i can see it in the terminal
    })
    .then((data) => console.log(data))
    // show me data
    .catch((err) => console.log(err))
    .then(() => {
      mongoose.connection.close();
      // close it before it blows up
    });
});
