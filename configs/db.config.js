const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const movieModel = require("../models/Movie.model");
/**
 *  function to connect to DB
 */

const connect = mongoose
  .connect("mongodb://localhost/express-cinema-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
