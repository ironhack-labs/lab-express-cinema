const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// create model's schema using the Mongoose "Schema" class
const moviesSchema = new Schema({
  // document stucture & rules defined here
  title: { type: String, required: true, },
  director: { type: String, required: true, },
  stars: { type: Array, maxlength: 3, },
  image: { type: String, },
  description: { type: String, },
  showtimes: { type: Array, },
}, {
  // additional settings for the Schema class
  timestamps: true, 
});

// "Book" model -> "books" collection
const Movies = mongoose.model("Movie", moviesSchema);


// make the "Book" model sharable to other files in the app
module.exports = Movies;