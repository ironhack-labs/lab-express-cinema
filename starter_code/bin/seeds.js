require("dotenv").config();

const mongoose = require("mongoose");

const Movie = require("../models/Movie.js");

const moviesData = require("./movies.json");

mongoose
  .connect("mongodb://localhost/express-cinema", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Movie.insertMany(moviesData)
  .then(moviesResults => {
    console.log(`Inserted ${moviesResults.length} MOVIES`);
  })
  .catch(err => {
    console.log("Insert Failure!!", err);
  });
