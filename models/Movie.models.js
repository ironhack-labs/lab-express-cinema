const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title of the movie is required'],
        },
        director: {
            type: String,
            required: [true, 'Director of the movie is required'],
        },
        stars: [{
            type: String
        }],
        image: {
            type: String
        },
        description: {
            type: String,
            required: [true, 'Description of the movie is required'],
        },
        showtimes: {
            type: [String],
            required: [true, 'Showtimes of the movie is required'],
        }
    },
)

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;