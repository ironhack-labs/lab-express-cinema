const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    director: {
        type: String
    },
    stars: [String],
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: [String]
});

const MovieModel = mongoose.model("Movie.model", MoviesSchema);

module.exports = MovieModel;