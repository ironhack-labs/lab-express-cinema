const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();
// :information_source: package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// :information_source: Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

async function mongooseDropCollection() {
  try {
    await mongoose.connection.dropCollection("movies");
    console.log(`Drop DB`);
  } catch (error) {
    console.error("Error connecting to mongo: ", error);
  }
}

async function mongooseConnect() {
  try {
    const { connection } = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`Connected to Mongo! Database name: "${connection.name}"`);
  } catch (error) {
    console.error("Error connecting to mongo: ", error);
  }
}

async function mongooseClose() {
  try {
    await mongoose.connection.close();
    console.log(`Connection close`);
  } catch (error) {
    console.error("Error connecting to mongo: ", error);
  }
}

module.exports = { mongooseConnect, mongooseClose, mongooseDropCollection };
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res, next) => {
    try {
      const movies = await Movie.find();
      console.log(movies);
      res.render("movies", { movies });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;



