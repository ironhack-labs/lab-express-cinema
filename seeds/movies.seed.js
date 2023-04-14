const mongoose = require("mongoose");
require("dotenv").config();
const movies = require("./movies.json");
const Movie = require("../models/Movie.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-cinema";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("connected to DB by movies.seed.js");
    await Movie.deleteMany();
    await Movie.insertMany(movies);
    console.log("Movies are in the database: ", movies)
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB by movies.seed.js");
  });
