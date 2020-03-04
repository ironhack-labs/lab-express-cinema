// for the movie model
const mongoose = require('mongoose');

const { Schema } = mongoose;


const resortChema = new Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    stars: {type: Array},
    image: {type: String},
    description: {type: String},
    showtimes: {type: Array}
});

const Movie = mongoose.model('Movie', resortChema);
module.exports = Movie;