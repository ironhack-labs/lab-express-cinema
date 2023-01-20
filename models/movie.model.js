const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the Movie model in the models/Movie.model.js file.
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String]
    },
    image: {
        type: String,
        default: "https://via.placeholder.com/150"
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    showtimes: {
        type: [String]
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;