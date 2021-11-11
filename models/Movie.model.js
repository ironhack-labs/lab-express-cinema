const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const movieschema = new Schema(
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

const Movie = model("Movie", movieschema);

module.exports = Movie;
