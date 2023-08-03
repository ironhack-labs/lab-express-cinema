const { Schema, model } = require('mongoose');

const filmSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]
    },
    {
        timestamps: true
    }
);
module.exports = model('Film', filmSchema)