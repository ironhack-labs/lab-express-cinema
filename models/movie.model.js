
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const moviesSchema = new Schema({
  title: {type: String},
  director: {type: String},
  stars: {type: [String]},
  image: {type: String, default: "https://loremflickr.com/640/360"},
  description: {type: String},
  showtimes: {type: [String]},

});

const Movies = mongoose.model ('Movies', moviesSchema);

module.exports = Movies;