// Seed File (run this to insert more books into the database)
// ----------------------------------------------------------------------------------------

// connects seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the Movie model to do our database query
const Movie = require("../models/movie.js");

// get the movie data from the JSON file
const movieData = require("./movies.json");

// 🚨🚨🚨 CONNECT TO THE SAME DATABASE AS app.js 🚨🚨🚨
// connect to the MongoDB server with the database name equal to the project name
// (also has console.logs for successful and failed connections)
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Movie.insertMany(movieData)
  .then(movieResults => {
    console.log(`Inserted ${movieResults.length} MOVIES 📽`);
  })
  .catch(err => {
    console.log("Insert FAILURE! 💩", err);
  });
