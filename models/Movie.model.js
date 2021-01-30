const moongoose = require('mongoose');

const { Schema, model } = moongoose;

const cinemaSchema = new Schema (
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String],
    },
    {
        timestamps: true
    }
);

  module.exports = model ('Movie', cinemaSchema)