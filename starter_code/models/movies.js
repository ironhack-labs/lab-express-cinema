const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const ObjectId     = Schema.ObjectId;

const movieSchema = new Schema({
  _id: ObjectId,
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
}) 

const movie = mongoose.model('movies', movieSchema);

module.exports = movie;