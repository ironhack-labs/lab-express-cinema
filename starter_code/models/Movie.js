const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const database = 'mongodb://localhost/cinemaApp'

const movieSchema = new Schema({
  // TODO: write the schema
  title: String,
  director: String,
  stars: Array,
  image: { type: String, default: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg" },
  description: String,
  showtimes: Array
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;


