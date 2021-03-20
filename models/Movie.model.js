const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const MovieSchema = new Schema({
    title: String,
    director: String,
    stars: [ String ],
    image: String,
    description: String,
    showtimes: [ String ]
})

const Movie = model('Movie', MovieSchema)

module.exports = Movie;