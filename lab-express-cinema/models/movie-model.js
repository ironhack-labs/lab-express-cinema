const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {required: true, type: String},
    director: {required: true, type: String},
    stars: {required: true, type: Array},
    image: {type: String},
    description: {type: String},
    showtimes: {type: Array}
});

// create the "Book" model for the "books" collection
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;