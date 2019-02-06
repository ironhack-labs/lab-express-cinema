const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create the Book schema using the Mongoose "Schema" class
const movieSchema = new Schema(
  {
    // document strucutre & rules are defined here
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: Array },
    image: { type: String },
    description: { type: String, minlength: 8 },
    showtimes: { type: Array }
  },
  {
    // additional settings for the Schema class here
    timestamps: true
  }
);

// use the schema to create the Book model (it has the methods fo db queries)
// "Book" model ---> "books" collection
const Movie = mongoose.model("Movie", movieSchema);

//share the "Book" model with other parts of the app
module.exports = Movie;
