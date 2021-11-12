const { Schema, model } = require("mongoose");


const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        description: String,
        img: String,
        showtimes: [String]
    },
    {
        timestamps: true

    }

);

const Movie = model("Movie", movieSchema);

module.exports = Movie;