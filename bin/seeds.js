// get congif from confis to connect to db
require("../configs/db.config");

// get data from movies.js
const moviesData = require("./movies");
// console.log(moviesData);

// get the MovieModel
const MovieModel = require("../models/Movie.model");
// console.log(MovieModel);

// use MovieModel to insert data in db
MovieModel.insertMany(moviesData)
.then( (movies) => console.log(movies.map((movie) => movie.title)))
.catch((err) => console.log(err))