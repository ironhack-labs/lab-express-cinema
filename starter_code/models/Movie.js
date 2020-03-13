const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: Array,
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
    rating: Number,
    showtimes: Array
  }
);
 const Movie = mongoose.model('Movie', movieSchema);
 module.exports = Movie;

 

