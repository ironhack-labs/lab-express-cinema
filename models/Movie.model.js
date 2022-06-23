const { Schema, model } = require('mongoose');

//const Schema = require('mongoose').Schema
//const model = require('mongoose').model


const movieSchema = new Schema(
    {
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
)

module.exports = model('Movie', movieSchema);