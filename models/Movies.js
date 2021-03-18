const mongoose = require('mongoose');

const { Schema } = mongoose;

const moviesSchema = new Schema({
    title: {type: String},
    director: {type: String},
    stars: [{type: String}],
    image: {type: String},
    description: {type: String},
    showtimes: [{type: String}]
})

const Movies = mongoose.model('movie', moviesSchema)

module.exports = Movies;