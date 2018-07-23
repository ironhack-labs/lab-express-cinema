const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: {type: String, default: 'Unknown'},
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
