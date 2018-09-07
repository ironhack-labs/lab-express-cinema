const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100,
        unique: true
    },

    director: {
        type: String,
        required: true,
        maxLength: 100
    },

    stars: {
        type: [String],
        required: true
    },

    image: {
        type: String,
        "default": "https://pp.userapi.com/c831508/v831508656/10a0fe/WhxkH3U-e8k.jpg?ava=1"
    },

    description: {
        type: String,
        maxLength: 200,
        minLength: 5
    },

    showtimes: {
        type: [String],
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;