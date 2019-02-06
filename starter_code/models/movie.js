const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create the Movie schema using the Mongoose "Schema" class
const movieSchema = new Schema(
  {
    // document structure & rules defined here
    image: { type: String, required: true },
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: [],
    description: { type: String, required: true },
    showtimes: []
  },
  {
    // additional settings for the Schema class here
    // inserts the date and time each document was created and updated
    timestamps: true
  }
);

// use the schema to create the Movie model (it has the methods for doing the db queries)
// "Movie" model gets turned into the "Movies" collection
const Movie = mongoose.model("Movie", movieSchema);

// share the "Movie" model with other part of the app
module.exports = Movie;
