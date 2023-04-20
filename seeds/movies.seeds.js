const mongoose = require("mongoose");
require("dotenv").config();
const movies = require("./movies");
const Movie = require("../models/Movie.model");
const { signedCookies } = require("cookie-parser");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to DB!");
    await Movie.deleteMany();
    await Movie.insertMany(movies);
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB!");
  });
