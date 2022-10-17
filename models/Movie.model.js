const { Schema, model } = require('mongoose'); 

const movieSchema = new Schema({
    title: String,
    director: String,
    starts: Array,
    image: String,
    description: String,
    showtimes: Array
})

module.exports = model('Movie', movieSchema); 