const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showtimes: Array
    },
);

const Movie = model("Movie", userSchema);

module.exports = Movie;



