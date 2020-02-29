const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: {type: String, default:'https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  description: String,
  showtimes: Array,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;