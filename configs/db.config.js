const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");
const movies = require("../bin/seeds");

mongoose
  .connect("mongodb://localhost/express-cinema-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return x.connection.dropDatabase();
  })
  .then(() => {
    return Movie.insertMany(movies);
  })
  // .then((insertedMovies) => {
  //   console.log("Collection with inserted Movies:", insertedMovies);
  // })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
