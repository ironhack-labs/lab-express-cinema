const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    stars: [String],
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    showtimes: [String]
});

const MovieModel = mongoose.model("Movie.model", MoviesSchema);

module.exports = MovieModel;