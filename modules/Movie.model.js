const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const movieSchema = new Schema (
    {
    title: {type: String, required: true},
    director: {type: String, required: true},
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
}
);

module.exports = model('Movie', movieSchema)