const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const movieSchema = new Schema({
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String],
    },
    {
        timestamps: true
    });

const Movie = model('Movie', movieSchema);
//each movie will be saved to collection 'movies'
//Model: Movie (uppercase, singular)
//Collection: movies (lowercase, plural)
module.exports = Movie;