const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema(
  {
    title: { type: String, unique: true },
    director: { type: String },
    stars: { type: Array },
    image: { type: String, default: "https://radionadlanu.stream/assets/images/imdbnoimage.jpg" },
    description: { type: String},
    showtimes: { type: Array },
  },
  { timestamps: true }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;



