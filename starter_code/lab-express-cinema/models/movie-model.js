const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title:        { type: String, required: true},
  director:  { type: String},
  stars:       { type: String},
  image:       { type: String},
  description: { type: String},
  showtimes: { type: Array}
},
// second argument;
{
  timestamps: true
}
);

const Movie = mongoose.model("Movie", movieSchema); // Moovie in the () --> book --> books in dataBase.

module.exports = Movie;