const moongoose = require('mongoose');

const { Schema, model} = moongoose;

const cinemaSchema = new Schema (
    {
        title: String,
        director: String,
        starts: [String],
        image: String,
        description: String,
        showtimes: [String],
    },
    {
        timestamps: true
    }
);

  module.exports = model ('Cinema', cinemaSchema)