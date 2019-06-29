const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


// estructura del modelo
const movieSchema = new Schema ({
   title: String,
   director: String,
   stars: Array,
   image: String,
   description: String,
   showtimes: Array
});

const Movie = mongoose.model('Movie', movieSchema);

//local module to the world
module.exports = Movie;
