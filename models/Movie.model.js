const { Schema, model } = require("mongoose");

const movieSchema = new Movie(
    {
        title: {
            type: String,
            unique: true
        },
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]
    },


);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
