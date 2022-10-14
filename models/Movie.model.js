const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
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
    }
)

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;