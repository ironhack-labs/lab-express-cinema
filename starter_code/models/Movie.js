//Traer funcionalidades de la libreria. 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [],
  image: String,
  description: String,
  showtimes: []
});

const Movie = mongoose. model('Movie', MovieSchema);

module.exports = Movie;
