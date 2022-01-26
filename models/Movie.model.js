//jshint esversion:8

const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showtimes: [{type: String}]
        
    },
    {
        timestamps: true
    }
);


module.exports = model('Movie', movieSchema);