var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  movieSchema = new Schema({ 
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;