var mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

module.exports = Movie;