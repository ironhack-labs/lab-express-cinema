const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
},
    {
        timestamps: true
    }
);

// module.exports = model('Movie', movieSchema)

const Movie = model('movie', movieSchema)

module.exports = Movie