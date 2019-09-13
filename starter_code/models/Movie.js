const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // TODO: write the schema
  title: {type: String, required: true, unique: true},
  director: String,
  stars: Array,
  dishType: String,
  image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  description: String,
  showtimes: Array,
  });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


console.log(Movie)

