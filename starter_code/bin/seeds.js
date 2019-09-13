require("dotenv").config();
const mongoose = require("mongoose");
const Movies = require("./../models/Movie");
const moviesData = require("./moviesData.json");

mongoose
  .connect(`mongodb://localhost/cinema`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  Movies.deleteMany()
    .then(deleted => {
      console.log("deleted")
      Movies.create(moviesData)
      .then(createdMovies => {
        console.log("Movies created")
        process.exit(0);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }