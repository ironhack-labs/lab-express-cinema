const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true
  },
  director: {
    type:String,
    required: true,
  },
  stars: [String],
  image: {
    type: String,
    default: "https://images.media-allmovies.com/images/75131.jpg"
  },
  description: {
    type:String,
    required: true,
  },
  showtimes: [String],
});

const movie = mongoose.model('movie', movieSchema);

module.exports = movie;
